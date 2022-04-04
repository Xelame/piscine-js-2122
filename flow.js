function flow (arrayOfFunc) {
    return function (value) {
        return reduceRight(arrayOfFunc, (accumulator, func) => func(accumulator))(value)
    } 
}

function reduceRight (array, func) {
    if (typeof array[0] == 'string') {
        return foldRight(array, func, "")
    } else {
        return foldRight(array, func, 0)
    }
}

function foldRight (array, func, accumulator) {
    for (let i = array.length - 1; i >= 0; i--) {
        accumulator = func(accumulator, array[i], i, array)
    }
    return accumulator
}
