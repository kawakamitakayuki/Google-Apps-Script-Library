function array2csv(arry) {
  return arry.map(function (array) { return array.join(",") }).join("\n");
}
