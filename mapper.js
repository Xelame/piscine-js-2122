function map(array, func, init=0) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]), init)
    }
    return newArray
}

function flatMap (array, func, init=0) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(...func(array[i]), init)
    }
    return newArray
}