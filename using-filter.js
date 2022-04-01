function filterShortStateName(array) {
  return array.filter(function(state) {
    return state.length < 7;
  })
}

function filterStartVowel(array) {
    return array.filter(state => /^[AEOIUaeoiu]/.test(state))
}