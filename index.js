function produceDrivingRange() {
  return (blockRange) => {
    if (blockRange <= 10) {
      return true
    }  else {
      return parseInt(blockRange) - 10 + ' blocks out of range';
    }
  }
}
