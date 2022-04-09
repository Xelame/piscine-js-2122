const filterEntries = (object, func) => {
    let newObject = {}
    for (let [key, value] of Object.entries(object)) {
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

const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

console.log(filterEntries(groceriesCart1, ([, v]) => v < 300))