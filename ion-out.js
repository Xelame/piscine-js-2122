function ionOut (string) {
    let regex = RegExp(/\w*t(?=ion)/g);
    return str.match(regex);
}