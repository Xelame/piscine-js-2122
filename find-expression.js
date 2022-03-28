const add4 = '+4'
const mul2 = '*2'

function findExpression(number) {
    let result = '1 ';
    for (let i = 1; i <= number; i++) {
        if (i % 4 === 0) {
            result += add4;
        } else if (i % 2 === 0) {
            result += mul2;
        } else {
            result += i;
        }
    }
    return result;
}