function split(string, separator) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        string = string.replace(separator, '');
    }
    for (let i = 0; i < string.length; i++) {
        result.push(string[i])
    }
    return result
}