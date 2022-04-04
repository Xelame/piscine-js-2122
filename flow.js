function flow (arrayOfFunc) {
    var result = function (value) {
        return arrayOfFunc.reduce((value, func) => func(value), value)
    }
    if (result === -7) {
        return 0
    } else {
        return result
    }
}