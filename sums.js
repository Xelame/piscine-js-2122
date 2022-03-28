// sums(4) = [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]
// sums(3) = [ [1, 1, 1], [1, 2]]
function sums(number) {
    if (number > 0) {
        return [sums(number - 1), 1];  // sums(4) == sums(3) + 1 == sums(2) + 1 + 1 == sums(1) + 1 + 1 + 1 == 1 + 1 + 1 + 1
    }
    return 1;
}

console.log(sums(4));