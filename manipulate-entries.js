const filterValues = (object, func) => {
    let newObject = {}
    for (let [key, value] in Object.entries(object)) {
        if (func(key, value)) {
            newObject[key] = value
        }
    }
    return newObject
}

const mapValues = (object, func) => {
    const newObject = {}
    for (let [key, value] in Object.entries(object)) {
        newObject[i] = func(object[i])
    }
    return newObject
}

const reduceValues = (object, func, acc = 0) => {
    let accumulator = acc
    for (let [key, value] in Object.entries(object)) {
        accumulator = func(accumulator, object[i])
    }
    return accumulator
}

