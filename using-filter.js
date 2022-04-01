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
        for (let i = 0; i < vowels.length; i++) {
            if (vowels[0] == vowels[i]) {
                count++
            }
        }
        if (count==vowels.length) {
            return true
        }
        return false
    })
}

function multiFilter(array) {
    console.log(array.filter(state => state.capital.lenght >= 8))

    /*
    .filter(state => !(/^[AEOIU]/.test(state.name)))
    .filter(state => state.tag.match(/[AEOIU]/g).length >= 1)
    .filter(state => state.region != South)
    */
} 

