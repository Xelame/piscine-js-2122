let vowels = new RegExp(/[aeiou]/, 'g'); // /[aeiou]/g is a global regex that matches all vowels in the string.

function vowelDots(str = '') {
    let result = str.replace(vowels, '$&.'); // $& is the matched string
    return result;
}

console.log(vowelDots('hello')); // he.llo.