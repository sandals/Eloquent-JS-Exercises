function deepEqual(objx, objy) {
  function isObject(value) {
    return typeof value == "object" && value != null;
  }

  for (var prop in objx) {
    if (isObject(objx[prop]) && isObject(objy[prop])) {
      return deepEqual(objx[prop], objy[prop]);
    }
    else {
      if (objx[prop] !== objy[prop]) {
        return false;
      }
    }
  }

  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj))
  console.log(deepEqual(obj, {here: 1, object: 2}));
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
