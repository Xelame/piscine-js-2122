function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
  }

function countLeapYears(date) {
    let years = date.getFullYear()
    let count = 0
    if (date.getFullYear() < 1900) {
        years -= 1900
    }
    for (let i = 1; i <= date.getFullYear(); i++) {
        if (isLeapYear(new Date(i, 1, 1))) {
            count++;
        }
    }
    return count
}

console.log(countLeapYears(new Date('0001-12-01')));