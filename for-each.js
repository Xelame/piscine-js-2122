function forEach(array, func) {
    return array.reduce((previous, current) => current(previous), initial)
}