// ### Question 1

// Convert the below functions to one-line arrow functions.

// function greet(name) {
//   return `Hello ${name}!`;
// }

const greet = (name) => `Hello ${name}!`;

// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => a + b;

// ### Question 2

// Convert the below code to use the then/catch syntax instead.

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

// async function getCatFacts() {
//   try {
//     const response = await fetch(
//       "https://noroff.herokuapp.com/v1/cat-facts/facts"
//     );
//     const results = await response.json();
//     console.log(results.length);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetch(url)
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.length);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// or

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.length))
//   .catch((error) => console.log(error));

// or enclosed in a function
function gettCat() {
  fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
    .then((response) => response.json())
    .then((data) => console.log(data.length))
    .catch((error) => console.log(error));
}
