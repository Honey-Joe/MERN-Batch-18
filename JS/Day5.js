// console.log("step 1");
// console.log("step 2");

// async function order() {
//   const data = await "step 3";
//   console.log(data);
// }
// order();

// console.log("step 4");

// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     // console.log();
//     return res.json(); // promises
//   })
//   .then((data) => {
//     console.log(data.users);
//   })
//   .catch((error) => {
//     console.log(`Internal server error ${error}`);
//   });

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data.users[0].address.coordinates.lat);
  } catch (error) {
    console.log(`fetch error ${error}`);
  }
}

fetchData();

