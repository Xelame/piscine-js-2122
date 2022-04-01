function adder (array, initial = 0) {
    return array.reduce((previous, current) => previous + current, initial)
}

function sumOrMul (array, initial = 0) {
    return array.reduce((previous, current) => current%2 ? previous + current : previous * current, initial)
}