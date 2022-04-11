const replica = (...objects) => {
    let entries = []
    for (let object of objects) {
        for(let [key, value] of Object.entries(object)) {
            if (key in Object.fromEntries(entries)) {
                entries[entries.flat().findIndex((element) => element == key)].push(value)
            }
            entries.push([key, value])
        }
    }
    return Object.fromEntries(entries)
}

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));