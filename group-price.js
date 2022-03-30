function groupPrice (string) {
    let prices = []
    let regex = /[a-zA-Z\$]+([0-9]+)\.([0-9]+)/
    while (regex.test(string)) {
        let result = string.match(regex);
        string.replace(regex, '');
        prices.push([result[0], result[1], result[2]]);
    }
    return prices
}

console.log(groupPrice('The price of the cereals is $4.00.')); // [['$4.00.', '4', '00']]