export const invert = (object) => {
    const invert = {}
    for (let key in object) {
        console.log(typeof object[key])
        if (typeof object[key] !== 'object') {
            invert[object[key]] = key
        }
    }
    return invert
}

