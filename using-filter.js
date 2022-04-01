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
    return array.map(function(state) {
        for (let index = 0; index < ["[Aa]", "[Ee]", "[Ii]", "[Oo]", "[Ue]"].length; index++) {
            const vowel = ["[Aa]", "[Ee]", "[Ii]", "[Oo]", "[Ue]"][index];
            if (state.match(RegExp(vowel, 'g')).length ==  state.match(/[AEOIUaeoiu]/g).length) {
                return true
            }
        }
        return false
    })
}