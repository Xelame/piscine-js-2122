const filterEntries = (object, func) => {
    let newObject = {}
    for (let [key, value] in Object.entries(object)) {
        if (func([key, value])) {
            newObject[key] = value
        }
    }
    return newObject
}

const mapEntries = (object, func) => {
    const newObject = {}
    for (let [key, value] in Object.entries(object)) {
        newObject[key] = func(value)
    }
    return newObject
}

const reduceEntries = (object, func, acc = 0) => {
    let accumulator = acc
    for (let [key, value] in Object.entries(object)) {
        accumulator = func(accumulator, value)
    }
    return accumulator
}

