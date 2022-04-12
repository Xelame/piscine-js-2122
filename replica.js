const replica = (...objects) => {
    let entries = []
    for (let object of objects) {
        for(let [key, value] of Object.entries(object)) {
            if (key in Object.fromEntries(entries) && typeof Object.fromEntries(entries)[key] === 'object') {
                entries[key] = Object.entries(Object.assign(Object.fromEntries(entries)[key], value))
            } else {
                entries.push([key, value])
            }
        }
    }
    return Object.fromEntries(entries)
}

console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b);