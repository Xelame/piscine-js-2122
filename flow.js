function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) => typeof value === 'object' ? func(...value) : func(value), value)
    }
}