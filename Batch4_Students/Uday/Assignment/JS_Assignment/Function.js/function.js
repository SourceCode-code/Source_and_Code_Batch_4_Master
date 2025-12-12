// create a function which will give me the longest word in the string

let str =
  " my name is siddhant i am a software engineer my expertise are in automation and development";

function longestword(string) {
  let splitstr = string.split(" "); //this will convert into array by spilting on spaces
  let word = "";
  console.log(splitstr);
  for (let i = 0; i < splitstr.length; i++) {
    if (splitstr[i].length > word.length) {
      word = splitstr[i];
    }
  }
  return word;
}

console.log(longestword(str));

console.log(longestword("qwertyuio tryujkl,hmgnvfdg"));

function flatten(arr) {
  return arr.flat(Infinity);
}

console.log(flatten([1, [2, [3, [1,2,[4]]]], 5]));