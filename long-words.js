function longWords (array) {
    return array.every(word => word.length >= 5)
}

function oneLongWord (array) {
    return array.some(word => word.length >= 10)
}

function noLongWords (array) {
    return array.every(word => word.length < 7)
}