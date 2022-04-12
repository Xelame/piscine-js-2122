// Réunis les tous ca pourrait passez 🤔

const regex = /\b(I |You |you |He |he |She |she |It |it |We |we |They |they )(\w+)/

const ex = 'If he you want to buy something you have to pay.'

const pronoun = (string = '') => {
    let finalObject = {}
    let words = []
    while (string.match(regex)) {
        let key = string.match(regex)[1].toLowerCase().slice(0, string.match(regex)[1].length-1)
        console.log(key);
        if (!finalObject.hasOwnProperty(key)) {
            finalObject[key] = { word: [], count: 0}
        }
        words = [string.match(regex)[2]].filter(word => !regex.test(word+" a"))
        finalObject[key].count++
        finalObject[key].word = finalObject[key].word.concat(words) 
        string = string.replace(regex, '$2')
    }
    return finalObject
}

console.log(pronoun(ex))

/* Exemple

const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

{ you: { word: [ 'can' ], count: 2 } }



{
  he: { word: [], count: 1}
  you: { word: [ 'want', 'have' ], count: 2 }
}
 */