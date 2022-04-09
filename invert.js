export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        if (typeof object[key] !== 'object') {
            invert[object[key]] = key
        }
    }
    return invert
}

