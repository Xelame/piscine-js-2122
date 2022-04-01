function isLeapYear(date) {
    return date.getFullYear() % 4 === 0;
  }

function countLeapYears(date) {
    let count = 0
    for (let i = 1; i <= date.getFullYear(); i++) {
        if (isLeapYear(new Date(i, 1, 1))) {
            count++;
        }
    }
    return count
}

console.log(countLeapYears(new Date('0001-12-01')));