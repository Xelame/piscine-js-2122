function triangle (str, num) {
  var output = str;
  for (var i = 0; i < num; i++) {
    output += output + '\n';
  }
  return output;
}