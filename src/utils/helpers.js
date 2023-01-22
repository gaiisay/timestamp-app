export function getDayString() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date().toLocaleString("de-DE", options);
}

export function getTimeString() {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date().toLocaleString("de-DE", options);
}
