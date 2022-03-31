function groupPrice (string) {
    let prices = []
    let result = []
    let regex = new RegExp("[a-zA-Z\$]+([0-9]+)\.([0-9]+)")
    while (regex.test(string)) {
        result = string.match(regex);
        string = string.replace(regex, '');
        prices.push([result[0], result[1], result[2]]);
    }
    return prices
}