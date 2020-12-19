let calculateRectangleArea = function(length, width) {
  let rectangle = length * width;
  if (rectangle > 0) {
    return rectangle;
  }
  
}

let calculateTriangleArea = function (base, height) {
  let triangle = base * height / 2;
  if (triangle > 0) {
    return triangle;
  }
}

let calculateCircleArea = function (radius) {
  let circle = Math.PI * radius * radius;
  if (circle > 0 && radius > 0) {
    return circle;
  } 
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(0, -1));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined