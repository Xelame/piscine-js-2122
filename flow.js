function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) => func(value) == -7 ? 0 : func(value), value)
    }
    
}