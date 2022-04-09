const defaultCurry = (a) => (b) => {
    let newObject = {}
    for (let [key, value] of Object.entries(b)) {
        if (!b.hasOwnProperty(key)) {
            newObject[key] = a[key]
        } else {
            newObject[key] = value
        }
    }
    return newObject
}

const mapCurry = (func) => (object) => {
    const newMap = []
    for (let [key, value] of Object.entries(object)) {
        newMap.push(func([key, value]))
    }
    return Object.fromEntries(newMap)
}

const reduceCurry = (func) => (object) => {
    let acc = 0
    for (let [key, value] of Object.entries(object)) {
            acc = func(acc, [key, value])
    }
    return acc
}

const filterCurry = (func) => (object) => {
    let newObject = {}
    for (let [key, value] of Object.entries(object)) {
        if (func([key, value])) {
            newObject[key] = value
        }
    }
    return newObject
}
