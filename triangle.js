function triangle (str, num) {
  var output = '';
  var flag = str;
  for (var i = 0; i < num; i++) {
    output += str + '\n';
    str += flag
  }
  return output[output.length-2];
}