const fusion = (...objects) => {
    let arrayProperties = []
    for (let i in objects) {
        Object.keys(objects[i]).forEach(key => arrayProperties.includes(key) ? null : arrayProperties.push(key))
    }
    
}

fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }, {d: 2, e: 3})