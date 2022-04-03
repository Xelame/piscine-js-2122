function flow (arrayOfFunc) {
    for (var i = 0; i < arrayOfFunc.length; i++) {
        return arrayOfFunc[i]()
    }
}