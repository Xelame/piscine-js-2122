// Réunis les tous ca pourrait passez 🤔

const RegexList = [/(I) (\w+)/, /((Y|y)ou) (\w+)/, /((H|h)e) (\w+)/, /((S|s)he) (\w+)/, /((I|i)t) (\w+)/, /((W|w)e) (\w+)/, /((T|t)hey) (\w+)/]

const ex = 'If he you want to buy something you have to pay.'

const pronoun = (string = '') => {
    let finalObject = {}
    for (let regex of RegexList) {
        let count = 0
        let words = []
        while (string.match(regex)) {
            count ++
            words.push(string.match(regex)[3])
            words.filter(word => (RegexList.every(regex2 => !(word+" a").match(regex2))))
            finalObject[string.match(regex)[1].toLowerCase()] = { word : words, count : count}
            string = string.replace(regex, '$3')
        }
    }
    console.log(finalObject)
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