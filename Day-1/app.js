//var
//data types
//arrays and objects
//win prediction game

//var - ES5 and new features const,let - ES6
// code => keyword

// var

// let email = 'phanendralg12@gmail.com';
// email = "phanendralanki@gmail.com";
// console.log(email);

// data types => strings,numbers,boolean,arrays and objects

// let userName = 'phani';
// console.log(userName);
// console.log(typeof userName);

//arrays -> amazon,flipkart,myntra => wishlist

//let item1 = 'milk';
// let item2 = 'bread';
// let item3 = 'butter';

// let items = ['milk','bread','butter'];
// console.log(items);
// console.log(items[0]); 
// console.log(items[10]); //undefined
// items.push('lassi');
// items.pop();
// items.splice(1,1);
// items.splice(0,0,'apple','cofee');
// splice(index,itemscount, add new values(optional));


// console.log(items);

//Objects
//with arrays approach - it will be confusing
// let student = ['phani','phani@gmail.com','20A21A1237',21,90];

//objects approach
// let student = {
//     name:'phanendra Lanki',
//     email:"phanendralg12@gmail.com",
//     regno:"20A21A1237",
//     age:21,
//     percentage:90,
// }
// console.log(student);
// console.log(student.name);
// console.log(student.age);
// student.name = 'Ganesh phanendra lanki';
// console.log(student);

//if you want to array of values inside an object
// let newStudent = {
//     name:'phani',
//     age:21,
//     hobbies:['Cooking','reading books','Watching movies']
// }
// console.log(newStudent);
// console.log(newStudent.age);

//if you want to store the data of multiple users

// let users = [
//     {name:'phani',age:21},
//     {name:"ganesh",age:20},
// ]

// console.log(users);
// console.log(users.name[0]); - will not work
// console.log(users[0]);
// console.log(users[0].name);

//Random Selector project - so many applications that are built using the same trick
let users = [
  { name: "phani", age: 21 },
  { name: "ganesh", age: 20 },
  { name: "nikhil", age: 20 },
  { name: "satish", age: 20 },
  { name: "venkatesh", age: 20 },
  { name: "sumanth", age: 20 },
  { name: "pavan", age: 20 },
  { name: "john", age: 20 },
  { name: "chaitu", age: 20 },
  { name: "sai", age: 20 },
  { name: "manoj", age: 20 },
  { name: "chandu", age: 20 },
];

//Random function
let random = (Math.random()*10).toFixed(0);
console.log(random);

console.log(users[random]);