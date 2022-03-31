function ionOut (string) {
    return string.match(/\w*t(?=ion)/g) == null ? [] : string.match(/\w*t(?=ion)/g);
}