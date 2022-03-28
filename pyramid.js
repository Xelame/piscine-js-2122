function pyramid (string, number) {
    let numberOfSpaces = number - string.length;
    let result = "";
    for (var i = 1; numberOfSpaces >= 0; i+=2) {
        result += " ".repeat(numberOfSpaces*string.length) + string.repeat(i) + "\n";
        numberOfSpaces--;
    }
    return result.slice(0, -1);
}
