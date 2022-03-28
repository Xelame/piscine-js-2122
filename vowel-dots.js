function vowels(str) {
    let regex = new RegExp(/.\s\d\b/, 'g');
    let result = str.match(regex);
    return result == null ? [] : result;
}

function vowelDots(str = '') {
    let regex = new RegExp(/[aeiou]/, 'g'); // /[aeiou]/g is a global regex that matches all vowels in the string.
    let result = str.replace(regex, '$&.'); // $& is the matched string
    return result;
}

console.log(vowelDots('hello')); // he.llo.