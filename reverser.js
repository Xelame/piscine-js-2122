function reverse(array) {
    var reversed = [];
    for (var i = 0; i < array.length; i++) {
        reversed.unshift(array[i]);
    }
    return reversed;
    }