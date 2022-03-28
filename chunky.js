function chunk(array, size) {
    var result = [];
    while (array.length) {
        result.push(array.splice(0, size));
    }
    return result;
}