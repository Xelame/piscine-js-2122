function isValid(date) {
    return !isNaN(date.getTime());
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