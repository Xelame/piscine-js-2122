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
    if (newValue) {
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
    }
    return sum
}

const replica = (...objects) => {
    let entries = []
    for (let object of objects) {
        for(let [key, value] of Object.entries(object)) {
            if (key in Object.fromEntries(entries)) {
                entries[key] = Object.entries(Object.assign(Object.fromEntries(entries)[key], value))
            } else {
                entries.push([key, value])
            }
        }
    }
    return Object.fromEntries(entries)
}

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));