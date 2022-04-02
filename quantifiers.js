function every (array, func) {
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            return false
        }
    }
    return true 
}

function some (array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            return true
        }
    }
    return false 
}

function none (array, func) {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            return false
        }
    }
    return true 
}