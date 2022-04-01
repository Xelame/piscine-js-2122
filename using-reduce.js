function adder (array, initial = 0) {
    return array.reduce((previous, current) => previous + current, initial)
}