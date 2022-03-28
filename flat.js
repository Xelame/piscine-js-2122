function flat(arr, depth = 1) {
    if (depth === 0) {
        return arr;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i], depth-1));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}