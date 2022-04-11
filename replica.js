const replica = (...objects) => {
    let entries = []
    for (let object of objects) {
        for(let [key, value] of Object.entries(object)) {
            entries.push([key, value])
        }
    }
    return Object.fromEntries(entries)
}