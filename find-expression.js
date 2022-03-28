function findExpression(number) {
    let result = 1;
    let representation = '1';
    while (result < number) {
        if (number / 2 > result) {
            representation += " " + mul2;
            result *= 2;
        } else {
            representation += " " + add4;
            result += 4;
        }
    }
    if (result != number) {
        return undefined
    }
    return representation;
}

console.log(findExpression(16));