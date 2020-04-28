// jshint esversion: 7

let containsDuplicates = s => {
  let cArr = new Array(26).fill(0),
   code;
  for (let i in s) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//containsDuplicates("Web App Dev") -> true
//containsDuplicates("Od or Ev") -> true
//containsDuplicates("Nth") -> false

//reverseWords1
let revWords1 = s => {
  let arr = s.spli("");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result = arr[i] + result;
  }
  return result;
};

//reverseAllWords("Web App Dev") -> "beW ppA veD"
//reverseAllWords("Delta Echo") -> "atleD ohcE"

//revWords2
let revWords2 = str => {
  let result = "";
  str.split("").forEach(function(char) {
    result = char + result;
  });
  return result;
}

//revWords3
let revWords3 = s => {
  let revString = "";
  for (var char of s) {
    revString = char + revString;
  }
  return revString;
};
