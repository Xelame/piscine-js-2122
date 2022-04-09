export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        invert[object[key]] = key
    }
    return invert
}

