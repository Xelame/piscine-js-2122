function ionOut (string) {
    return string.match(RegExp(/\w*t(?=ion)/g));
}