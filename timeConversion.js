function timeConversion(s) {
  let [hour, min, sec] = s.split(":");

  const isAfter12H = sec.match("PM");
  const isBefore = sec.match("AM");

  const newSec = sec.replace(isBefore || isAfter12H, "");

  if (isAfter12H) {
    if (isAfter12H && hour === "12") {
      return `${hour}:${min}:${newSec}`;
    }

    return `${String(+hour + 12)}:${min}:${newSec}`;
  } else if (isBefore && hour === "12") {
    return `00:${min}:${newSec}`;
  }

  return s.replace(isBefore, "");
}

console.log(timeConversion("12:40:22PM"));
