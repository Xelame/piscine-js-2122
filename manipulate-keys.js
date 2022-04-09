const filterKeys = (object, func) => {
    let newObject = {}
    for (let i in object) {
        if (func(i)) {
            newObject[i] = object[i]
        }
    }
    return newObject
}

const mapKeys = (object, func) => {
    const newObject = {}
    for (let i in object) {
        newObject[func(i)] = object[i]
    }
    return newObject
}

const reduceKeys = (object, func, acc = '') => {
    let accumulator
    for (let i in object) {
        if (!accumulator) {
            accumulator = acc + i
        } else {
            accumulator = func(accumulator, i)
        }
    }
    return accumulator
}