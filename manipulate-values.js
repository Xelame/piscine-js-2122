const filterValues = (object, func) => {
    let newObject = {}
    for (let i in object) {
        if (func(object[i], i)) {
            newObject[i] = object[i]
        }
    }
    return newObject
}

const mapValues = (object, func) => {
    const newObject = {}
    for (let i in object) {
        newObject[i] = func(object[i])
    }
    return newObject
}

const reduceValues = (object, func) => {
    let accumulator = 0
    for (let i in object) {
        accumulator = func(accumulator, object[i])
    }
    return accumulator
}

