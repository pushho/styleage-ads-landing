"use client";

import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { ChevronUp, GoogleIcon } from "./icons";

const SOURCE_LANGUAGE = "en";
const ELEMENT_ID = "google_translate_element";

type Language = {
  code: string;
  native: string;
  english: string;
  short: string;
};

const DISPLAY_CODES: Record<string, string> = {
  "zh-CN": "zh-Hans",
  "zh-TW": "zh-Hant",
  iw: "he",
  jw: "jv",
};

function displayName(code: string, locale: string) {
  try {
    const name = new Intl.DisplayNames([DISPLAY_CODES[locale] ?? locale], {
      type: "language",
    }).of(DISPLAY_CODES[code] ?? code);
    if (!name || name.toLowerCase() === code.toLowerCase()) return null;
    return name.charAt(0).toLocaleUpperCase(locale) + name.slice(1);
  } catch {
    return null;
  }
}

function toLanguage(code: string, googleLabel = code): Language {
  const english = displayName(code, "en") ?? googleLabel;
  return {
    code,
    english,
    native: displayName(code, code) ?? english,
    short: code.split("-")[0].toUpperCase(),
  };
}

const SOURCE = toLanguage(SOURCE_LANGUAGE);

function readCookieLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/);
  return match ? decodeURIComponent(match[1]) : SOURCE_LANGUAGE;
}

function writeCookie(value: string, expires = "") {
  const { hostname } = window.location;
  for (const domain of ["", `; domain=${hostname}`, `; domain=.${hostname}`]) {
    document.cookie = `googtrans=${value}; path=/${domain}${expires}`;
  }
}

function applyLanguage(code: string) {
  if (code === SOURCE_LANGUAGE) {
    writeCookie("", "; expires=Thu, 01 Jan 1970 00:00:00 GMT");
    window.location.reload();
    return;
  }

  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (combo) {
    combo.value = code;
    combo.dispatchEvent(new Event("change"));
  } else {
    writeCookie(`/${SOURCE_LANGUAGE}/${code}`);
    window.location.reload();
  }
}

const subscribe = () => () => {};

export function LanguageSwitcher() {
  const cookieLanguage = useSyncExternalStore(
    subscribe,
    readCookieLanguage,
    () => SOURCE_LANGUAGE,
  );
  const [chosen, setChosen] = useState<string | null>(null);
  const [languages, setLanguages] = useState<Language[]>([SOURCE]);

  useEffect(() => {
    const host = document.getElementById(ELEMENT_ID);
    if (!host) return;
    const observer = new MutationObserver(() => {
      const combo = host.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (!combo || combo.options.length < 2) return;
      observer.disconnect();
      setLanguages([
        SOURCE,
        ...Array.from(combo.options)
          .filter((option) => option.value && option.value !== SOURCE_LANGUAGE)
          .map((option) => toLanguage(option.value, option.text)),
      ]);
    });
    observer.observe(host, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const currentCode = chosen ?? cookieLanguage;
  const current =
    languages.find((language) => language.code === currentCode) ?? toLanguage(currentCode);
  const options = languages.some((language) => language.code === current.code)
    ? languages
    : [...languages, current];

  return (
    <>
      <label
        translate="no"
        className="notranslate relative inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white/70 pr-2.5 pl-3 text-sm text-text/80 transition-colors focus-within:border-accent hover:border-accent-soft-dark hover:text-text"
      >
        <GoogleIcon className="size-4 shrink-0 text-accent" />
        <span
          aria-hidden="true"
          className="font-medium tracking-wide md:hidden xl:inline 2xl:hidden"
        >
          {current.short}
        </span>
        <span
          aria-hidden="true"
          className="hidden max-w-32 truncate md:inline xl:hidden 2xl:inline"
        >
          {current.native}
        </span>
        <ChevronUp className="size-3 shrink-0 rotate-180 text-muted" />
        <span className="sr-only">Language</span>
        <select
          value={current.code}
          onChange={(event) => {
            setChosen(event.target.value);
            applyLanguage(event.target.value);
          }}
          className="absolute inset-0 cursor-pointer appearance-none rounded-full opacity-0"
        >
          {options.map((language) => (
            <option key={language.code} value={language.code} lang={language.code}>
              {language.native === language.english
                ? language.native
                : `${language.english} · ${language.native}`}
            </option>
          ))}
        </select>
      </label>

      <div id={ELEMENT_ID} inert className="google-translate-host" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    { pageLanguage: "${SOURCE_LANGUAGE}", autoDisplay: false },
    "${ELEMENT_ID}"
  );
};`}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
