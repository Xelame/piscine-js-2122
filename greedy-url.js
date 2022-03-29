function getURL (url) {
    let regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g
    return url.match(regex) == null ? [] : url.match(regex);
}
