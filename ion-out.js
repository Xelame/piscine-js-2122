function ionOut (string) {
    return str.match(RegExp(/\w*t(?=ion)/g));
}