function pyramid (string, number) {
    let numberOfSpaces = number - 1;
    let result = "";
    for (var i = 1; numberOfSpaces > 0; i+=2) {
        result += " ".repeat(numberOfSpaces) + string.repeat(i) + "\n";
        numberOfSpaces--
    }
    return result
}

console.log(pyramid('#', 5));