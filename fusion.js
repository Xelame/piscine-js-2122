const fusion = (...objects) => {
    let finaleObject = {}
    for (let i in objects) {
        let object = objects[i]
        for (let key in object) {
            finaleObject[key] = object[key] 
        }
    }
}

fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })