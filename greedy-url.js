function getURL (url) {
    return url.match(RegExp(/(https|http):\/\/\w*.\w*/g)) == null ? [] : url.match(RegExp(/(https|http):\/\/\w*.\w*/g));
}