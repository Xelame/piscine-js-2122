function flow(arrayOfFunc) {
    return arrayOfFunc.reduce(function(func) {
        return func(...arguments)
    })
}

