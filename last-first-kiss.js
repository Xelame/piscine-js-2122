function first(a) {
    return a[0];
}

function last(a){
    return a[a.length - 1];
}

function kiss(name) {
  return [last(name), first(name)];
}
