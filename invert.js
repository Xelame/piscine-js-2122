export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        if (object[key] !== object.__proto__[key]) {
            invert[object[key]] = key
        }
    }
    return invert
}

