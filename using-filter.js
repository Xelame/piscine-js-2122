function filterShortStateName(array) {
  return array.filter(function(state) {
    return state.length < 7;
  })
}

function filterShortStateName(array) {
    return array.filter(state => /[AEOIUaeoiu]\w/.test(state))
}