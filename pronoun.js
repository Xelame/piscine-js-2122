
const regex = /\b(I|You|you|He|he|She|she|It|it|We|we|They|they)( (\w+)|\b)/

const pronoun = (string = '') => {
    string = string.toLowerCase()
    let finalObject = {}
    let words = []
    while (string.match(regex)) {
        let key = string.match(regex)[1].toLowerCase()
        console.log(key);
        if (!finalObject.hasOwnProperty(key)) {
            finalObject[key] = { word: [], count: 0}
        }
        words = [string.match(regex)[3]].filter(word => !regex.test(word+" a"))
        finalObject[key].count++
        if (word[0]) {
            finalObject[key].word = finalObject[key].word.concat(words) 
        }
        string = string.replace(regex, '$2')
    }
    return finalObject
}

console.log(pronoun("If he you want to buy something you have to pay you"))