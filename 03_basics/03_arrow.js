const user = {
 
    username :"lakshya",
    price : 999,

welcomeMessage: function(){
console.log(`${this.username}, Welcome to website`);
console.log(this);


}
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);


// function chai(){
//    let username = "lakshya"
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let username = "lakhsya"
//     console.log(this.username);
// }


// const chai = () =>{
    
//     let username = "lakhsya"
     
//      console.log(this);
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1+num2
// }


// const addTwo = (num1 , num2) => num1+num2
   
// const addTwo = (num1 , num2) => (num1+num2)

const addTwo = (num1 , num2) => ({username : "lakshya"})

console.log(addTwo(3,2));










