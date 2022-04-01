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
    return array.map(state => _.CountBy(state.toLowerCase().match(/[AEOIUaeoiu]/g))[state.toLowerCase().match(/[AEOIUaeoiu]/g)[0]] == state.toLowerCase().match(/[AEOIUaeoiu]/g).length)
}