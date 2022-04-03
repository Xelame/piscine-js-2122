function flow (arrayOfFunc) {
    const initialValue = typeof arrayOfFunc[0](arrayOfFunc[0]) === 'object' ? [] : 0
    return function (value) {
        return arrayOfFunc.reduce((value, func) => func(value), initialValue)
    }
}