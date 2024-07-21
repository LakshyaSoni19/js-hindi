// Object literlas

// object.create  through constructors


const mySym = Symbol("key1")


const JsUser = {
    name: "lakshya",
    "full name": "Lakshya Soni",
    [mySym]: "mykey1",
    age: 21,
    location: "Indore",
    email: "lak@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = "udaan@gamil.com"
// Object.freeze(JsUser)
JsUser.email = "kumar@gmail.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello bhaio kya haal chal");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());