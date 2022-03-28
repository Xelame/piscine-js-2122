function letterSpaceNumber (str) {
    let regex = new RegExp(/.\s\d\b/, 'g');
    let result = str.match(regex);
    return result;
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'));