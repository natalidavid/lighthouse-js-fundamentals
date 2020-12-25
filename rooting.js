let judgeVegetable = function(vegetables, metric) {
  let name = ''; //store string here
  let number = 0; //store ranking value here
  for (let i = 0; i < vegetables.length; i ++) { //loop thru vegetables
    if (vegetables[i][metric] > number) {  //check if value of ranking (10, 2 and 4) is larger than our number var
      number = vegetables[i][metric]; //store value in number each time. After 1st loop, number will be 10, so next time it compares, it'll compare if 10 > 2
      name = vegetables[i].submitter; //asign submitter value to name
    }
  }
  return name // return name of person with highest redness ranking
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'; // 10, 2 or 4

console.log(judgeVegetable(vegetables, metric));