is.num = function(value) {
  return typeof value === 'number'
}
is.nan = function(value) {
  return typeof value === 'number' && isNaN(value)
}
is.str = function(value) {
  return typeof value === 'string'
}
is.bool = function(value) {
  return typeof value === 'boolean'
}
is.undef = function(value) {
  return typeof value === 'undefined'
}
is.def = function(value) {
  return !is.undef(value)
}
is.arr = function(value) {
  return typeof value === 'object' && value instanceof Array
}
is.obj = function(value) {
  return typeof value === 'object' && value !== null && !(value instanceof Array)
}
is.fun = function(value) {
  return typeof value === 'function'
}
is.truthy = function(value) {
  return !!value
}
is.falsy = function(value) {
  return !value
}