function split(string, separator) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i+separator.length) === separator) {
            result.push(string.slice(0, i));
            string = string.slice(i+separator.length);
            i = -1;
        }
    }
    result.push(string)
    return result;
}

function join(array, separator) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i !== array.length-1) {
            result += separator;
        }
    }
    return result;
}