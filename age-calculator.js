let ageCalculator = function(name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

let calculation = ageCalculator();
console.log(ageCalculator("Suzie", 1983, 2015));