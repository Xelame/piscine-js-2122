export const pick = (object, string) => {
    let newObject = {}
    if (typeof string === 'string') {
        object.hasOwnProperty(string) ? newObject[string] = object[string] : null
    } else {
        string.forEach(s => {
            object.hasOwnProperty(s) ? newObject[s] = object[s] : null
        })
    }
    return newObject
}

export const omit = (object = {}, string) => {
    let newObject = {}
    for (let key in object) {
        if (typeof string === 'string') {
            if (key !== string) {
                object[key] != object.__proto__[key] ? newObject[key] = object[key] : null
            }
        } else {
            if (!string.includes(key)) {
                object[key] != object.__proto__[key] ? newObject[key] = object[key] : null
            }
        }
    }
    return newObject
}

const Join = (...objects, key) => {
    