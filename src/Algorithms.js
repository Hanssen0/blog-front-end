function BreakByLine(s) {
  s.replace("\r", "");
  return s.split("\n");
}
function GetDateTimeFromTimestamp(timestamp) {
  let publish_date = new Date(timestamp);
  let timezone_hour = -publish_date.getTimezoneOffset()/60;
  if (timezone_hour > 0) timezone_hour = "+" + timezone_hour;
  return publish_date.toLocaleString() + " (UTC " + timezone_hour + ")";
}
export {
  BreakByLine,
  GetDateTimeFromTimestamp,
};
