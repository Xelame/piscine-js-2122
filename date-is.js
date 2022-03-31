function isValid(date) {
    if (typeof date == "number") {
        date = new Date(date);
    }
    return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
}

function isAfter(date, date2) {
    if (isValid(date) && isValid(date2)) {
        if (typeof date == "number") {
            date = new Date(date);
        }
        if (typeof date2 == "number") {
            date2 = new Date(date2);
        }
        return date.getTime() > date2.getTime();
    }
    return false;
}

function isBefore(date, date2) {
    if (isValid(date) && isValid(date2)) {
        if (typeof date == "number") {
            date = new Date(date);
        }
        if (typeof date2 == "number") {
            date2 = new Date(date2);
        }
        return date.getTime() < date2.getTime();
    }
    return false;
}

function isFuture(date) {
    return isAfter(date, new Date());
}

function isPast(date) {
    return isBefore(date, new Date());
}

console.log(isValid(Date.now())); // true