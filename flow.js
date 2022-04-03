function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce(function (value, func) {
        return func(value)
        }, value)
    }
}