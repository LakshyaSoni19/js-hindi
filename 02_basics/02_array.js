const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","Flash","Batman"]

// marvel_heros.push(dc_heros);

// console.log (marvel_heros);
// console.log (marvel_heros [3]);

//  const allHero = marvel_heros.concat(dc_heros)
// console.log(allHero);


const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("jethalal"));
console.log(Array.from("Daya"));