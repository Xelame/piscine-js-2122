export const pick = (object, string) => {
    let newObject = {}
    if (typeof string === 'string') {
        object.hasOwnProperty(string) ? newObject = {string : object[string]} : null
    } else {
        string.forEach(s => {
            object.hasOwnProperty(string) ? newObject[string] = object[string] : null
        })
    }
    return newObject
}

export const omit = (object = {}, string) => {
    let newObject = {}
    if (typeof string === 'string') {
        object.hasOwnProperty(string) ? null : newObject = {string : object[string]} 
    } else {
        string.forEach(s => {
            object.hasOwnProperty(string) ? null : newObject[string] = object[string]
        })
    }
    return newObject
}