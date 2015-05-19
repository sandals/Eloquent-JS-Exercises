for (var x = 0; x < 8; x++) {
  var x_is_odd = x % 2 != 0;
  var builder = "";
  var odd_marker = "";
  var even_marker = "";

  if (x_is_odd) {
    odd_marker = "#";
    even_marker = " ";
  }
  else {
    odd_marker = " ";
    even_marker = "#";
  }

  for (var y = 0; y < 8; y++) {
    var y_is_odd = y % 2 != 0;

    if (! y_is_odd ) {
      builder += odd_marker;
    }
    else {
      builder += even_marker;
    }
  }

  console.log(builder);
}
