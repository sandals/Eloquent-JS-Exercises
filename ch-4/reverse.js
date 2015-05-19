function reverseArray(given) {
  var new_array = [];

  for (var i = given.length - 1; i >= 0; i--) {
    new_array.push(given[i]);
  }

  return new_array;
}

function reverseArrayInPlace(given) {
  for (var i = 0; i < Math.floor(given.length / 2); i++) {
    var temp = given[i]
    given[i] = given[given.length - 1 - i];
    given[given.length - 1 - i] = temp;
  } 

  return given;
}

console.log(reverseArray(['A','B','C']));
console.log(reverseArrayInPlace([1,2,3,4,5]));
