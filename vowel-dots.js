function vowel(str = '') {
    let regex = new RegExp(/[aeiou]/, 'g'); // /[aeiou]/g is a global regex that matches all vowels in the string.
    let result = str.replace(regex, '$&.'); // $& is the matched string
    return result;
}
