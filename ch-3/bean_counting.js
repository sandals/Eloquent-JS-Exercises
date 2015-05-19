function countBs(str) {
  return countChar(str, 'B');
}

function countChar(haystack, needle) {
  var counter = 0;

  for (var i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) == needle) {
      counter++;
    }
  }

  return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
