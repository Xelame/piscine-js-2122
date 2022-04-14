const fusion = (...objects) => {
    let arrayProperties = []
    let newObject = {}
    for (let i in objects) {
        Object.keys(objects[i]).forEach(key => arrayProperties.includes(key) ? null : arrayProperties.push(key))
    }
    arrayProperties.forEach(key => {
        let sum
        objects.forEach(object => {
            sum = Join(sum, object[key])
        })
        newObject[key] = sum
    })
    return newObject
}

const Join = (sum, newValue) => {
    if (typeof sum == typeof newValue) {
        if (typeof sum == 'number') {
            sum += newValue
        }
        if (Array.isArray(sum)) {
            sum = sum.concat(newValue)
        }
        if (typeof sum == 'string') {
            sum = `${sum} ${newValue}`
        }
    } else {
        sum = newValue
    }
    return sum
}
