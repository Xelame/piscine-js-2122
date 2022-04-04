function flow (arrayOfFunc) {
    return function (value) {
        return arrayOfFunc.reduce(function(value, func) {
            console.log(func(value));
            return func(value)
        }, value)
    }
    
}

