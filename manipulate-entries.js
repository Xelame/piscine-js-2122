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

const reduceEntries = (object, func, acc) => {
    for (let [key, value] of Object.entries(object)) {
        if (acc == undefined) {
            acc = i
        } else {
            acc = func(acc, [key, value])
        }
    }
    return acc
}

const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }

console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, ''))