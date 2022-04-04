function flow(arrayOfFunc) {
    returnarrayOfFunc.reduce((func) => func(...arguments), value)
}

