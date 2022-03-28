function get(src, path) {
    path.split('.').forEach(function(key) {
        if (src[key] === undefined || src[key] === null) {
            return undefined;
        } else {
            src = src[key];
        }
    });
    return src[key];
}