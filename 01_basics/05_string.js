const name = "Lakshya"
const repoCount = 50

// console.log(name+ repoCount+"value") 
// Don't use above

console.log(` Hello my name is ${name} and my repo is ${repoCount}`);

const getName = new String('jethalal')

console.log(getName[0]);
console.log(getName.__proto__);



console.log(getName.toUpperCase());
console.log(getName.charAt(2));
console.log(getName.indexOf('t'));

const newString = getName.substring(-9,4)
console.log(newString);

const anotherString = getName.slice(-8,4)
console.log(anotherString);


const newStringOne = "     Babita"
console.log(newStringOne);
console.log(newString.trim());



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','_'));

console.log(getName.split('-'));