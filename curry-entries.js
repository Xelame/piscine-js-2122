const defaultCurry = (a) => (b) => {
    let newObject = {}
    for (let [key, value] of Object.entries(b)) {
        newObject[key] = value
    }
    for (let [key, value] of Object.entries(a)) {
        if (!newObject.hasOwnProperty(key)) {
            newObject[key] = value
        }
    }
    return newObject
}

const mapCurry = (func) => (object) => {
    const newMap = []
    for (let [key, value] of Object.entries(object)) {
        newMap.push(func([key, value]))
    }
    return Object.fromEntries(newMap)
}

const reduceCurry = (func) => (object, acc) => {
    for (let [key, value] of Object.entries(object)) {
        if (acc == undefined) {
            acc = value
        } else {
            acc = func(acc, [key, value])
        }
    }
    return acc
}

const filterCurry = (func) => (object) => {
    let newObject = {}
    for (let [key, value] of Object.entries(object)) {
        if (func([key, value])) {
            newObject[key] = value
        }
    }
    return newObject
}

const reduceScore = (objects, acc) =>  reduceCurry((acc, [, value]) => (acc += value.pilotingScore + value.shootingScore))(filterCurry(([, v]) => v.isForceUser)(objects), acc)

const filterForce = (objects) => filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(objects)

const mapAverage = (objects) => mapCurry(([k, v]) => {
    v.averageScore = (v.pilotingScore + v.shootingScore) / 2
    return [k, v]}
    )(objects)

