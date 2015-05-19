for (var i = 1; i <= 100; i++) {
  var printable = "";

  if (i % 3 == 0) {
    printable += "Fizz";
  }
  if (i % 5 == 0) {
    printable += "Buzz";
  }
  if (!printable) {
    printable += i;
  }

  console.log(printable);
}
