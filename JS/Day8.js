// spread operator
// => unpack the group of elements into the individual elements.
// => both array and object ( ... )

// var arr1 = [10, 20, 30, 40, 50];
// copy
// let arr2 = [0, ...arr1];
// console.log(arr2);

// concatination
// console.log([...arr1, ...arr2]);

// var obj1 = {
//   name: "Revamp",
//   age: 20,
//   years: 5,
// };

// var obj2 = {
//   ...obj1,
//   name: "Revampsasf",
//   sample: "copy",
//   data: "dummy",
// };

// const mark = {
//   english: "",
//   maths: "",
//   social: "",
// };

// const student = {
//   name: "",
//   age: "",
//   department: "",
// };

// const total = {
//   ...mark,
//   ...student,
// };

// console.log({ ...obj1, ...obj2 });

// Rest Operator
// => it pack the element into the group of element.
// => function parameter and destructuring.
// => return => array of element [1, 2]

// function add(a, b, c, ...d) {
//   console.log(a, b, c, ...d);
// }

// add(10, 20, 30, 40, 50, 60, 70);

// 10, 20, 30, 40, 50, 60, 70

//String Methods

// let str = "Hello World";
// // let str1 = str.trim();
// // console.log(str1);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(" ")); // return array
// console.log("Mr ".concat(str));
// console.log(str.lastIndexOf("l"));
// console.log(str.replace("World", "Developer"));

// Array destructuring
let arr = [1, 2, 3, 4, 5];
let [a, b , ...c] = arr; // destructuring
// var a = arr[0];
// var b = arr[1];
// var c = a + b;
console.log(a , b , c[1]);
output = 3

// Object destructuring
// const obj = {
//   name: "peter parker",
//   age: 20,
//   email: "peterparker@gmail.com",
//   pass: "Peter@123",
// };

// let { email, pass } = obj;
// console.log(email, pass);

// Map method () = > array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var mapMethod = arr.map((e) => {
//   return e;
// });

// console.log(mapMethod);

// filter method
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var filterMethod = arr.filter((e) => e % 2 != 0);

// console.log(filterMethod);

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     // console.log(data.users);
//     var filterData = data.users.filter((e) => e.id < 5);
//     console.log(filterData);
//   } catch (error) {
//     console.log(`fetch error ${error}`);
//   }
// }

// fetchData();

// filterMethod.map((e) => {
//   console.log(e);
// });

// reduce method

// var arr = [45];
// var reduceMethod = arr.reduce((accumulator, currentvalue) => {
//   console.log(accumulator, currentvalue);
//   return accumulator + currentvalue; 
// });

// console.log(reduceMethod);
