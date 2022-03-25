function words (strings) {
    return strings.split(' ')
}

function sentence (array) {
    return array.join(' ')
}

function yell (strings) {
    return strings.toUpperCase();
}

function whisper (strings) {
    return '*' + strings.toLowerCase() + '*';
}

function capitalize (strings) {
    strings = strings.toLowerCase()
    return strings.charAt(0).toUpperCase() + strings.slice(1);
}