function filter(array, func) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

function reject(array, func) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            newArray.push(array[i])
        }
    }
    return newArray
}

function partition(array, func) {
    let newArray = [[], []]
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArray[0].push(array[i])
        } else {
            newArray[1].push(array[i])
        }
    }
    return newArray
}