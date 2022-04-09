export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        console.log( object[key] === object.__proto__)
        if (object[key] !== object.__proto__) {
            invert[object[key]] = key
        }
    }
    return invert
}

