function flow (arrayOfFunc) {
    return function (value) {
        return reduceRight(arrayOfFunc, value)
    } 
}

function reduceRight (array, func) {
    if (typeof array[0] == 'string') {
        return foldRight(array, func, "")
    } else {
        return foldRight(array, func, 0)
    }
}