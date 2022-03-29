function getURL (url) {
    return url.match(/(https|http):\/\/(\w*.\w*.|\w*.)[a-zA-Z\/0-9=&?]*/g) == null ? [] : url.match(/(https|http):\/\/(\w*.\w*.|\w*.)[a-zA-Z\/0-9=&?]*/g);
}