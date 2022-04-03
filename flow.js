function flow (arrayOfFunc) {
    const initialValue = 0
    return function (value) {
        return arrayOfFunc.reduce((value, func) => func(value), initialValue)
    }
}