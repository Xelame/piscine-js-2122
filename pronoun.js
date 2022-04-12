// Réunis les tous ca pourrait passez 🤔

const regex = /(I |You |you |He |he |She |she |It |it |We |we |They |they )(\w+)/

const ex = 'If he you want to buy something you have to pay.'

const pronoun = (string = '') => {
    let finalObject = {}
    let words = []
    while (string.match(regex)) {
        if (!finalObject.hasOwnProperty(string.match(regex)[1].toLowerCase())) {
            finalObject[string.match(regex)[1].toLowerCase()] = { word: [], count: 0}
        }

        words = [string.match(regex)[2]].filter(word => !regex.test(word+" a"))
        finalObject[string.match(regex)[1].toLowerCase()].count++
        finalObject[string.match(regex)[1].toLowerCase()].word = finalObject[string.match(regex)[1].toLowerCase()].word.concat(words) 
        string = string.replace(regex, '$2')
    }
    return finalObject
}

pronoun(ex)

/* Exemple

const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

{ you: { word: [ 'can' ], count: 2 } }



{
  he: { word: [], count: 1}
  you: { word: [ 'want', 'have' ], count: 2 }
}
 */