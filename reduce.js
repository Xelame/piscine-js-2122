function fold (array, func, accumulator) {
    for (let i = 0; i < array.length; i++) {
        accumulator = func(accumulator, array[i], i, array)
    }
    return accumulator
}

function foldRight (array, func, accumulator) {
    for (let i = array.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, array[i], i, array)
    }
    return accumulator
}

function reduce (array, func) {
    if (typeof array[0] == 'string') {
        return fold(array, func, "")
    } else {
        return fold(array, func, 0)
    }
}

function reduceRight (array, func) {
    if (typeof array[0] == 'string') {
        return foldRight(array, func, "")
    } else {
        return foldRight(array, func, 0)
    }
}