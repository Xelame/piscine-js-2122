const deepCopy = (list) => {
    if (Array.isArray(list)) {
        if (list.length == 0) {
            return []
        }
        if (list.length == 1) {
            return list[0]
        }
        return list.slice(0,1).concat(list.slice(1))
    } else {
        return Object.assign({}, list)
    }
}

