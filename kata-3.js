const numberOfVowels = function(data) {
  let number = 0; //store value here
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) { //switch thru vowels
      case 'a':
        number +=1;
        break;

      case 'e':
        number +=1;
        break;

      case 'i':
        number +=1;
        break;

      case 'o':
        number +=1;
        break;

      case 'u':
        number +=1;
        break;  
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));