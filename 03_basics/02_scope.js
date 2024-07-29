
let a = 300;

if(true){

    let a = 10
    const b = 20
console.log("Inner:", a);
    }

 console.log(a);
// console.log(b);

//node 03_basics/02_scope.js

// *********************************************


function one(){
    const username = "Lakshya"

    function two(){
        const website = "gitub"
        console.log(username);
    }
    // console.log(website);
    two()
} 
// one()

if (true) {
    const username = "kumar"
    if (username ==="kumar") {
    const website ="github"
    } 
    // console.log(website);
} 
console.log(username);


