function triangle (str, num) {
  var output = '';
  for (var i = 0; i < num; i++) {
    output += str + '\n';
    str += str
  }
  return output;
}