function letterSpaceNumber (str) {
  return str.replace(/[0-9]/g, function (match) {
    return ' ' + match;
  }).trim();
}