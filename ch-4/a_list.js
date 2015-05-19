function arrayToList(given) {
  var list = {};

  for (var i = given.length - 1; i >= 0; i--) {
    list = { value: given[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node; node = node.rest) {
    if (node.value) {
      array.push(node.value);
    }
  }

  return array;
}

function prepend(value, rest) {
  return { value: value, rest: rest };
}

function nth(list, index) {
  if (index == 0 || index > list.length) {
    if (list.value) {
      return list.value
    }
    else {
      return undefined;
    }
  }

  return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20]))
  console.log(listToArray(arrayToList([10, 20, 30])));
  console.log(prepend(10, prepend(20, null)));
  console.log(nth(arrayToList([10, 20, 30]), 2));
