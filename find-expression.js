const add4 = '+4'
const mul2 = '*2'

function findExpression(number) {
    let result = 1;
    let representation = '1';
    while (result < number) {
        if ((number - result) % 4 != 0) {
            representation += " " + mul2;
            result *= 2;
        } else {
            representation += " " + add4;
            result += 4;
        }
    }
    if (result > number) {
        return undefined
    }
    return representation;
}
