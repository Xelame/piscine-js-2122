export const pick = (object = {}, string = []) => {
    let newObject = {}
    if (typeof string === 'string') {
        object.hasOwnProperty(string) ? newObject = {string : object[string]} : null
    } else {
        string.forEach(s => {
            object.hasOwnProperty(string) ? newObject[string] = object[string] : null
        })
    }

}
