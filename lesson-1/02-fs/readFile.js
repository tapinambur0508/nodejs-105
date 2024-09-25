// const fs = require("node:fs");

// // try {
// //   const data = fs.readFileSync("read.txt", {encoding: "utf-8"});

// //   console.log(data);
// // } catch(error) {
// //   console.error(error);
// // }

// // console.log("Before");

// // fs.readFile("read.txt", {encoding: "utf-8"}, (error, data) => {
// //   if (error) {
// //     console.error(error);
// //     return;
// //   }

// //   console.log(data);
// // });

// // console.log("After");

// console.log("Before");

// fs.promises.readFile("read.txt", {encoding: "utf-8"})
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// console.log("After");

// const fs = require('node:fs').promises;
const fs = require('node:fs/promises');

fs.readFile('read.txt', { encoding: 'utf-8' })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
