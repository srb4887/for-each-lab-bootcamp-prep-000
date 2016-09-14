function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  arr = [8, 7, 11, 23]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
