function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((func, array) =>  Array.isArray(value) ? func(...value) : func(value), value)
    }
}