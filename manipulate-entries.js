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

const totalCalories = (groceriesCart) => Math.round((reduceEntries(groceriesCart, (acc, [key, value]) => acc + nutritionDB[key].calories*value/100, 0))*10)/10

const lowCarbs = (groceriesCart) => filterEntries(groceriesCart, ([key,value]) => nutritionDB[key].carbs * value/100 < 50)

const cartTotal = (groceriesCart) => mapEntries(groceriesCart, ([key, value]) => [key, mapEntries(nutritionDB[key], ([keyCart, valueCart]) => [keyCart, parseFloat((valueCart*value/100).toFixed(3))])])

