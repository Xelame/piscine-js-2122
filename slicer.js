function slicewithloop(array, begin = 0, end = array.length) {
    var result = [];
    for (var i = begin; i < end; i++) {
        result.push(array[i]);
    }
    if (typeof array === 'string') {
        return result.join('');
    } else {
        return result;
    }
}