function isFriday(date) {
  return date.getDay() === 5;
}

function isWeekend (date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function isLeapYear(date) {
  return date.getFullYear() % 4 === 0 || date.getFullYear() % 400 === 0 && date.getFullYear() % 100 !== 0;
}