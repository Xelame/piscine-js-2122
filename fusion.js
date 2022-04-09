const fusion = (...objects) => {
    for (let i in objects) {
        console.log(objects[i].c)
    }
}

fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })