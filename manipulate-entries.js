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
    const newMap = []
    for (let [key, value] of Object.entries(object)) {
        newMap.push(func([key, value]))
    }
    return Object.fromEntries(newMap)
}

const reduceEntries = (object, func, acc = 0) => {
    let accumulator = acc
    for (let [key, value] in Object.entries(object)) {
        accumulator = func(accumulator, value)
    }
    return accumulator
}

const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

console.log(mapEntries(groceriesCart1, ([k, v]) => [
    v > 250 ? `✔️${k}` : `❌${k}`,
    v - 250,
]))