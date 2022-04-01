function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
  }

function countLeapYears(date) {
    let years = date.getFullYear()
    if (date.getFullYear() < 1900) {
        years -= 1900
    for (let i = 1; i <= date.getFullYear(); i++) {
        if (isLeapYear(new Date(i, 1, 1))) {
            count++;
        }
    }
    return count
}