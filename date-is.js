function isValid(date) {
    date = new Date(date);
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}

function isAfter(date, date2) {
    return date.getTime() > date2.getTime();
}

function isBefore(date, date2) {
    return date.getTime() < date2.getTime();
}

function isFuture(date) {
    return isAfter(date, new Date());
}

function isPast(date) {
    return isBefore(date, new Date());
}

console.log(Date.now());