function getURL (url) {
    let regex = /(https|http):\/\/([\w_-]+|[\w_-]+\.[\w_-]+|[\w_-]+\.[\w_-]+\.[\w_-]+)([\[\]\w.,@?^=%&:\/~+#-]*[\[\]\w@?^=%&\/~+#-])/g
    return url.match(regex) == null ? [] : url.match(regex);
}
