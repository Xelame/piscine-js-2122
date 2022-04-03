function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) => func(value), value)
    }
}