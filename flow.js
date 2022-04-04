function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reverse().reduce((value, func) => func(value), value)
    }
    
}
