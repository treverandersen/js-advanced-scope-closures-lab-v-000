function produceDrivingRange() {
  return function(blockRange) {
    if (blockRange <= 10) {
      return true
    } else {
      return blockRange - 10 + 'blocks out of range';
    }
  }
}
