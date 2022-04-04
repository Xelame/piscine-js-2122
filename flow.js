function flow(arrayOfFunc) {
    return arrayOfFunc.reduce((func) => func(...arguments), value)
}

