function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((func, value) =>   func(value), value)
    }
}