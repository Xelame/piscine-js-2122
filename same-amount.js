function sameAmount (str, regex1, regex2) {
    let result1 = str.match(regex1);
    let result2 = str.match(regex2);
    if (result1 == null || result2 == null) {
        return false;
    }
    return result1.length === result2.length;
}