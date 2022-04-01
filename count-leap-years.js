function isLeapYear(date) {
    if (date.getFullYear() % 4 === 0) {
        if (date.getFullYear() % 100 === 0) {
            if (date.getFullYear() % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

function countLeapYears(date) {
    let count = 0
    for (let i = 1; i < date.getFullYear(); i++) {
        if (isLeapYear(new Date(i, 1, 1))) {
            count++;
        }
    }
    return count
}

console.log(countLeapYears(new Date('1664-08-09')));