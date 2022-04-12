const replica = (...objects) => {
    let entries = []
    for (let object of objects) {
        for(let [key, value] of Object.entries(object)) {
            if (key in Object.fromEntries(entries) && Object.fromEntries(entries)[key] instanceof Object && !(value instanceof Array) && !(Object.fromEntries(entries)[key] instanceof Array)) {
                entries[key] = Object.entries(Object.assign(Object.fromEntries(entries)[key], value))
            } else {
                entries.push([key, value])
            }
        }
    }
    return Object.fromEntries(entries)
}

console.log(replica({ a: [1, 2, 4] }, { a: { b: [4] } }).a)