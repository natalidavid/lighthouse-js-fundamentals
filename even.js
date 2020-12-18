const isEven  = function (num) {
  num = num % 2 === 0;
  return num;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);