function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) =>  value.isArray() ? func(...value) : func(value), value)
    }
}