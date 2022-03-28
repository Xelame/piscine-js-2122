function letterSpaceNumber (str) {
    let regex = new RegExp(/.\s\d\b/, 'g');
    let result = str.match(regex);
    return result == null ? [] : result;
}
