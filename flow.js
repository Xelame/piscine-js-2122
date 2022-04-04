function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce((value, func) => console.log(func(value)), value)
    }
    
}

