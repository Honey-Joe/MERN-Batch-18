// == , ===
// loose equality  ( == )  =>  it check only a value
// strict equality ( === ) =>  it check both value and type (data type)

// var a = 5;  // number
// var b = "5";  // string

// if (a === b) {
//   console.log("both are equal");
// } else {
//   console.log("both are not equal");
// }

// Array
// var arr = [10, 20, 30, "hello", true, null, { name: "Revamp" }];
// console.log(arr);

// Accessing the array elements

// we can access the array using the index value
// index is always start from => 0   => n - 1
// length is always start from => 1

// var a = arr[0];
// var b = arr[1];
// console.log(a + b);

// console.log(arr.length);

// Adding the element in array
// var arr = [10, 20, 30, "hello", true, null];

// arr[6] = "end";
// console.log(arr);

// push , unshift
// arr.push(100); // add the element at the end
// arr.unshift("start"); // add the element at the beginning
// console.log(arr);

// Modifying the array element
// var arr = [10, 20, 30, "hello", true, null];
// arr[3] = "developer";
// arr[4] = false;
// console.log(arr);

// Removing the element in the array
// pop  ,  shift

// pop => remove the element at the end
// shift => remove the element at the beginning
// var arr = [10, 20, 30, "hello", true, null];
// arr.pop();
// arr.shift()
// console.log(arr);

// Objects
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: "18",
//   learning: true,
//   classmates: ["sandhiya", "vaideshwaran"], // index value
//   things: { mobile: "Iphone", laptop: "mac" }, // obj =>
// };
// console.log(obj);
// Accessing the objects properties
// dot notation
// bracket notation

// dot notation
// console.log(obj.things.mobile);

// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: "18",
//   learning: true,
//   classmates: ["sandhiya", "vaideshwaran"], // index value
//   things: { mobile: "Iphone", laptop: "mac" }, // obj =>
// };

// bracket notation => [""]
// console.log(obj.things["mobile"]);

// Adding properties in the object
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: "18",
//   learning: true,
//   classmates: ["sandhiya", "vaideshwaran"], // index value
//   things: { mobile: "Iphone", laptop: "mac" }, // obj =>
// };

// obj["time"] = { start: "8.15", end: "9.45" };
// console.log(obj);

// modifying;
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: "18",
//   learning: true,
//   classmates: ["sandhiya", "vaideshwaran"], // index value
//   things: { mobile: "Iphone", laptop: "mac" }, // obj =>
// };

// obj.classmates[0] = "Vaideshwaran";
// console.log(obj);

// obj["class"] = "figma";
// console.log(obj);

// Remove
// var obj = {
//   name: "Revamp",
//   class: "MERN",
//   batch: "18",
//   learning: true,
//   classmates: ["sandhiya", "vaideshwaran"], // index value
//   things: { mobile: "Iphone", laptop: "mac" }, // obj =>
// };

// delete obj.name;
// delete obj["classmates"];
// console.log(obj);

// declarative function
// function naee() {
//   console.log("declarative function");
// }
// naee();

// () =>
// var name = (a, b) => {
//   console.log(a + b);
// };

// name(10, 20); // argument
