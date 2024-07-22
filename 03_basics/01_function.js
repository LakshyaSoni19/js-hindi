function Name(){
    console.log("L");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("y");
    console.log("a");
}
// Name()

// function add(num1,num2){
//     console.log(num1+num2);
// }


function add(num1,num2){
   const result = num1+num2
   return result 
   console.log("laksya")
}
// add(3,4)
// const result = add(3,4)
// console.log("Result",result)

function loginUserMessage(username)
{if(username === undefined){
    console.log("please enter a username")
    return 
}
    return `${username} just logged in`
}
// console.log(loginUserMessage("Lakshya")

// console.log(loginUserMessage())

function calculatePrice(val1,val2,...num1){
return num1
}
// console.log(calculatePrice(2000,32000,500,4000))

const user ={
    username:"laskhya",
    price:100
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is $(anyObject.price)`);

}
// handleObject(user)
handleObject({
    username:"kumar",
    price:150
})

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400]))
