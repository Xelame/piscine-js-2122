function getURL (url) {
    let regex = /(https|http):\/\/(\w*\/|\w*\.\w*\/|\w*\.\w*\.\w*\/)[a-zA-Z\/0-9=&?_@\[,\]\.-]*/g
    return url.match(regex) == null ? [] : url.match(regex);
}
