function arrToSet(arr) {
  return new Set(arr);
}

function arrToStr (arr) {
  return arr.join('');
}

function setToArr (set) {
  return Array.from(set);
}

function setToStr (set) {
  return setToArr(set).join('');
}

function strToArr (str) {
  return str.split('');
}

function strToSet (str) {
  return arrToSet(strToArr(str));
}

function mapToObj (map) {
  return Array.from(map).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

function objToArr (obj) {
  return Object.keys(obj).map(key => obj[key]);
}

function objToMap (obj) {
  return new Map(Object.entries(obj));
}

function arrToObj (arr) {
    return arr.reduce((obj, value, index) => {
        obj[index] = value;
        return obj;
    }, {});
}

function strToObj (str) {
  return arrToObj(strToArr(str));
}

function superTypeOf (value) {
  if (typeof value === 'object') {
    if (value instanceof Array) {
      return 'Array';
    } else if (value instanceof Set) {
      return 'Set';
    } else if (value instanceof Map) {
      return 'Map';
    } else if (value === null) {
      return 'null';
    } else {
      return 'Object';
    }
  } else if (typeof value === 'string') {
    return 'String';
  } else if (typeof value === 'number') {
    return 'Number';
  } else if (typeof value === 'function') {
    return 'Function';
  } else {
      return typeof value;
  }
}