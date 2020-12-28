const sumLargestNumbers = function(data) {
  let max1 = 0;      //1st largest no
  let max2 = 0;      //2ndlargest no
  let largestNumbers = [] // takes only 2 numbers
  for (let i = 0; i < data.length; i++) {
    if (data[i] > max1) { //loops and checks if i > 0
      max1 = data[i];     //stores first i to max1
      largestNumbers[0] = max1; //stores max1 value to first index of two largestNumbers (#10, 3 and 92)
    }
  }
  for (let j = 0; j < data.length; j++) { //loop to target 2nd largest number
    if ((data[j]) < largestNumbers[0] && (data[j] > max2)) {
       //stores max value in max2 as long as smaller than largestNumber[0] (< 10, 3, 92)
      max2 = data[j];
      largestNumbers[1] = max2;
    }
  }
  return largestNumbers[0] + largestNumbers[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));