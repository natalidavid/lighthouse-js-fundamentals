const urlEncode = function(text) {
  text = text.trim()
  let textSplit = text.split(" ")
  let output = textSplit[0]
  for (let i = 1; i < textSplit.length; i++) {
    output += "%20" + textSplit[i]
  }
  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));