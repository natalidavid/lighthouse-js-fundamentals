const instructorWithLongestName = function(instructors) {
  let index = 0;
  let nameLength = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > nameLength) {
      nameLength = instructors[i].name.length;
      index = [i];
  }
  return(instructors[index]); //display object within the array containing longest name
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
