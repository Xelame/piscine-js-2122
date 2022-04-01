function filterShortStateName(array) {
  return array.filter(function(state) {
    return state.length <= 7;
  })
}

