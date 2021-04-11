/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

function createInitialsFromName(name) {
  // Complete the function
let words=name.split(" ")
let number= words.length
let SName = number===1;
let TName = number ===2;
let MName = number>2;

if(SName){
Letters=name.split("")
let InitialName=(Letters[0] + Letters[1]).toUpperCase();
return InitialName
}

if(TName){
  Word1=words[0].split("")
  Word2=words[1].split("")
  let InitialName =(Word1[0]+Word2[0]).toUpperCase();
  return InitialName
}
if(MName){
  Word1=words[0].split("")
  WordL=words[number-1].split("")
  let InitialName =(Word1[0]+WordL[0]).toUpperCase();
  return InitialName
}
}

module.exports = createInitialsFromName;
