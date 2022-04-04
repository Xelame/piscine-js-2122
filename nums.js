function sums(n) {
    if (n <= 1) {
        return []
    }
    let partition = new Array(n).fill(0)
    let k = 0
    partition[k] = n
    let output = []
    while (true) {
        let rem_val = 0
        while (k >= 0 && partition[k] == 1) {
            rem_val += partition[k]
            k -= 1
        } if (k < 0) {
            break
        } partition[k] -= 1
        rem_val += 1
        while (rem_val > partition[k]) {
            partition[k + 1] = partition[k]
            rem_val = rem_val - partition[k]
            k += 1
        } partition[k + 1] = rem_val
        k += 1
        output.push(partition.filter(val => val !== 0).sort())
    } for (let j = 0; j < output.length; j++) {
        let test = 0
        for (let a = 0; a < output[j].length; a++) {
            test = test + output[j][a]
        } if (test > n) {
            while (test > n) {
                test = test - output[j][0]
                output[j].shift()
            }
        }
    } return output.sort()
}

