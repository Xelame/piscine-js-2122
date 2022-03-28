function get(src, path) {
    path.split('.').forEach(function(key) {
        if (src[key] === undefined || src[key] === null) {
            return undefined
        } else {
            src = src[key];
        }
    });
    if (src[path] === undefined) {
        return undefined;
    } else {
        src = src[path];
    }
    return src;
}