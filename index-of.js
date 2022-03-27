function indexOf(array, searchElement, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(array, searchElement, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

function includes(array, searchElement, fromIndex = 0) {
    return indexOf(array, searchElement, fromIndex) !== -1;
}