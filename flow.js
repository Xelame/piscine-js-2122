function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) =>  Array.isArray(value) ? func(...value) : func(value), value)
    }
}