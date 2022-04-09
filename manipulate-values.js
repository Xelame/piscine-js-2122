const filterValues = (object, func) => {
    let newObject = {}
    for (let i in object) {
        if (func(object[i])) {
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

const reduceValues = (object, func, acc = 0) => {
    let accumulator = acc
    for (let i in object) {
        accumulator = func(accumulator, object[i])
    }
    return accumulator
}

