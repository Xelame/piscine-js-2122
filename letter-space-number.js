function letterSpaceNumber (str) {
    let regex = new RegExp('.\s\d');
    let result = str.match(regex);
    if (result === null) {
        return undefined;
    }
    return result[0];
}