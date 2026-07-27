const name="viss"
const repoCount =5

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('visssss')

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);

const newStringOne = "    vishu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vishu.com/vishu%20kanpariya"

console.log(url.replace('%20','-'));

console.log(url.includes('kanpariya'));
