function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
  }

function countLeapYears(date) {
    for (let i = 1; i <= date.getFullYear(); i++) {
        if (isLeapYear(new Date(i, 1, 1))) {
            count++;
        }
    }
    return count
}