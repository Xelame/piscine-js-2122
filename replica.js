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
