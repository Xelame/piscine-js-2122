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
    console.log(newObject)
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

fusion({ a: 10, b: 8, c: "hello", e: [2] }, { a: 10, b: [2, 8] }, {c: "Alex", e: [5, 9]})