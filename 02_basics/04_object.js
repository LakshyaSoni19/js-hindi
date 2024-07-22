//  objects singleton

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Virat"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "vir@gmail.com",
    fullname: {
        userFullName: {
            firstName: "kumar",
            lastName: "Sanu"
        }
    }

}
// console.log(regularUSer.fullname.userFullName.firstName);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({},obj1, obj2)


const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const user = [
    {
    id: 1,
    email: "lak@gmail.com"
},{
    id: 1,
    email: "lak@gmail.com"
}
,{
    id: 1,
    email: "lak@gmail.com"
},{
    id: 1,
    email: "lak@gmail.com"
}
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName:"js in hindi",
price:"999",
courseInstructor:"Boss"    

}
// course.courseInstructor

const{courseInstructor}= course

console.log(courseInstructor);

// {
//      "name":"Lakshya",
// "courseName":"js in hindi",
// "price":"free"

// }

[
    {}
]


































