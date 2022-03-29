function getURL (url) {
    return url.match(/(https|http):\/\/[a-zA-Z\/0-9=&?_@\[,\]\.-]*/g) == null ? [] : url.match(/(https|http):\/\/[a-zA-Z\/0-9=&?_@\[,\]\.-]/g);
}