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

const lowCarbs = (groceriesCart) => {
    return filterEntries(groceriesCart, ([key,value]) => nutritionDB[key].carbs * value/100 < 50)
}
