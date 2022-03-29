function ionOut (string) {
    return string.match(RegExp(/\w*t(?=ion)/g)) == null ? string : string.replace(RegExp(/\w*t(?=ion)/g), '');
}