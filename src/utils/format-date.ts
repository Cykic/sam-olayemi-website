const LONG_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Africa/Lagos",
});

export const formatLongDate = (iso: string) => LONG_DATE.format(new Date(iso));
