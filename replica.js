const replica = (...objects) => {
    let mainObject = {}
    for (let object of objects) {
        Object.assign(mainObject, object)
    }
    return mainObject
}
