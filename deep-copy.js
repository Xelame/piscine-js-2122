const deepCopy = (list) => {
    if (Array.isArray(list)) {
        return Array.from(list, x => deepCopy(x))
    } else if (typeof list === 'object' && !(list instanceof RegExp)) {
        return Object.assign({}, list)
    }
    return list
}

