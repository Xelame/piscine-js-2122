function get(src, path) {
    src.split('.').forEach(function(key) {
        src = src[key];
    });
    return src;
}