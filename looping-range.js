let range = function(start, end, step) {
  let newRange = [];
  for (let i = start; i <= end; i = i + step) {
    newRange.push(i);

    if (start > end || step <= 0) {
      return []
    }
  }
  return newRange;
}

console.log(range(0, 10, 2));  //Prints [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5));  //Prints 	[ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3));  //Prints 	[ -5, -2, 1 ]