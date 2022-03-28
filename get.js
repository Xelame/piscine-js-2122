function get(src, path) {
    path.split('.').forEach(function(key) {
        if (src[key] === undefined || src[key] === null) {
            src = undefined;
        } else {
            src = src[key];
        }
    });
    return src;
}