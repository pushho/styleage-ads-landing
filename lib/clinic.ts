export const CLINIC = {
  name: "StyleAge",
  legalName: "STYLE AGE FZ-LLC",
  tagline: "Dermatology & Aesthetics",
  phone: "+971 56 733 1693",
  whatsapp: "+971 56 733 1693",
  email: "styleagewhatsapp@gmail.com",
  address:
    "Ibn Sina Bldg, 27 - Unit 303, 3rd Floor, Block, B - Umm Hurair Second - Dubai Healthcare City - Dubai - United Arab Emirates",
  addressLines: [
    "Ibn Sina Building 27, Block B, Unit 303, 3rd Floor",
    "Umm Hurair Second, Dubai Healthcare City, Dubai, UAE",
  ],
  hours: {
    weekdays: "9:00 AM – 9:00 PM",
    days: "Monday – Sunday",
    note: "Appointments recommended. Walk-ins welcome subject to availability.",
  },
};

const digits = (value: string) => value.replace(/\D/g, "");

export const CLINIC_LINKS = {
  phone: `tel:+${digits(CLINIC.phone)}`,
  whatsapp: `https://wa.me/${digits(CLINIC.whatsapp)}?text=${encodeURIComponent(
    `Hi ${CLINIC.name}, I'd like to ask about a hair transplant consultation.`,
  )}`,
  email: `mailto:${CLINIC.email}`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CLINIC.address,
  )}`,
};
