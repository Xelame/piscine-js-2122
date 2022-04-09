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

const reduceKeys = (object, func, acc) => {
    for (let i in object) {
        if (!acc) {
            acc = i
        } else {
            acc = func(acc, i)
        }
    }
    return acc
}