function getURL (url) {
    return string.match(RegExp(/(https|http):\/\/\w*.\w*/g)) == null ? [] : string.match(RegExp(/(https|http):\/\/\w*.\w*/g));
}