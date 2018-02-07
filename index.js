function produceDrivingRange(blockRange) {
  var blockRange = parseInt(blockRange);
  return function(m) {
    if (m > blockRange) {
      true
    } else {
      false
    }
  }
}
var produceDrivingRange10 = produceDrivingRange(10);
