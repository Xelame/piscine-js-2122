function getURL (url) {
    let regex = /(https|http):\/\/([\w_-]+|[\w_-]+\.[\w_-]+|[\w_-]+\.[\w_-]+\.[\w_-]+)([\[\]\w.,@?^=%&:\/~+#-]*[\[\]\w@?^=%&\/~+#-])/g
    return url.match(regex) == null ? [] : url.match(regex);
}

function greedyQuery (url) {
    let validURL = getURL(url);
    let result = [];
    let regexQuery = /(&|\?)[\[\]\w.,@^=%:\/~+#-]+/g;
    for (let i = 0; i < validURL.length; i++) {
        if (validURL[i].match(regexQuery) != null) {
            if (validURL[i].match(regexQuery).length >= 3) {
                result.push(validURL[i]);
            }
        }
    }
    return result;
}

function notSoGreedy (url) {
    let validURL = getURL(url);
    let result = [];
    let regexQuery = /(&|\?)[\[\]\w.,@^=%:\/~+#-]+/g;
    for (let i = 0; i < validURL.length; i++) {
        if (validURL[i].match(regexQuery) != null) {
            if (validURL[i].match(regexQuery).length < 3) {
                result.push(validURL[i]);
            }
        }
    }
    return result;
}
