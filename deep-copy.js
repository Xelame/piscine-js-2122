const deepCopy = (list) => {
    if (Array.isArray(list)) {
        return Array.from(list)
    } else {
        return Object.assign({}, list)
    }
}

