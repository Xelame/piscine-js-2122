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
    if (newValue != undefined) {
        if (typeof sum == typeof newValue) {
            if (typeof sum == 'number') {
                sum += newValue
            } else if (Array.isArray(sum)) {
                sum = sum.concat(newValue)
            } else if (typeof sum == 'string') {
                sum = `${sum} ${newValue}`
            } else if (typeof sum == 'object') {
                sum = fusion(sum, newValue)
            }
        } else {
            sum = newValue
        }
    }
    return sum
}
