function split(string, separator) {
    let result = []
    string = string.replaceAll(separator, '');
    for (let i = 0; i < string.length; i++) {
        result.push(string[i])
    }
    return result
}