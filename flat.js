function flat(arr) {
  return arr.reduce(function(acc, curr) {
    return acc.concat(curr);
  }, []);
}