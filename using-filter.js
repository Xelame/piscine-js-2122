function filterShortStateName(array) {
  return array.filter(function(state) {
    return state.length < 7;
  })
}

function filterStartVowel(array) {
    return array.filter(state => /^[AEOIUaeoiu]/.test(state))
}

function filter5Vowels(array) {
    return array.filter(state => state.match(/[AEOIUaeoiu]/g).length >= 5)
}

function filter1DistinctVowel(array) {
    return array.filter(function(state) {
        let vowels = state.toLowerCase().match(/[aeoiu]/g)
        let count = 0
        for (let i = 0; i < vowels.lenght; i++) {
            if (vowels[0] == vowels[i]) {
                count++
            }
        }
        if (count==vowels.length) {
            return true
        }
    })
}



