export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        if (typeof object[key] === 'object') {
            for (let prototype in object[key]) {
                invert[object[key][prototype]] = key
            }
        } else {
            invert[object[key]] = key
        }
    }
    return invert
}

