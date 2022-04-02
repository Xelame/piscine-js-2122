function map(array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}

function flatMap (array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(...func(array[i]))
    }
    return newArray
}