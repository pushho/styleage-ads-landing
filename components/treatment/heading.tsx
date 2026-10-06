import { Fragment, type ReactNode } from "react";

export function Heading({
  as: Tag = "h2",
  text,
  className,
}: {
  as?: "h1" | "h2";
  text: string;
  className?: string;
}) {
  const lines = text.split("\n");
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </Tag>
  );
}

export function Eyebrow({
  children,
  className = "text-accent-dark",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[0.68rem] tracking-[0.2em] uppercase ${className}`}>
      {children}
    </p>
  );
}
