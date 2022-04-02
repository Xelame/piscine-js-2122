function map(array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i], i, array))
    }
    return newArray
}

function flatMap (array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof func(array[i], i, array) === 'object') {
            newArray.push(...func(array[i], i, array))
        } else {
            newArray.push(func(array[i], i, array))
        }
    }
    return newArray
}