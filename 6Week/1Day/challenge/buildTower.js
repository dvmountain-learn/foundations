
function buildTower(num) {
    console.log(num)
    var str = "";

  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num - i; j++)
      str += " ";
    for (j = 1; j <= 2 * i - 1; j++)
      str += " *";
      str += '\n'
  }

  return str;
}

console.log(buildTower(3))