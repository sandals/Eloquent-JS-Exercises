function range(start, end, step) {
  var collection = [];

  if (arguments.length < 3) {
    step = 1;
  }

  if (start <= end) {
    for (start; start <= end; start += step) {
      collection.push(start);
    }
  }
  else {
    for (start; start >= end; start += step) {
      collection.push(start);
    }
  }

  return collection;
}

function sum(range) {
  sum = 0;

  for (var i = 0; i < range.length; i++) {
    sum += range[i];
  }

  return sum;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
