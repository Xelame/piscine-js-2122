function split(string, separator) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] === separator)) {
            result.push(string[i])
        }
    }
    return result
}