function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((func, array) =>   func(value), value)
    }
}