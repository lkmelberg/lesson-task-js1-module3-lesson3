// // ### Question 1

// // Write code that checks if the below variable is truthy, log the string "truthy" if it is, and "falsy" if not.

// const menuIsOpen = false;

// if (menuIsOpen) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// // ### Question 2

// // Based on the below URL, what are the different querystring parameters and their respective values?

// // ```
// // https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354
// // ```

// // platforms is a parameter with a value of 4
// // genres is a parameter with a value of action
// // publishers is a parameter with a value of 354

// // ### Question 3

// // - Create an async function called `getCatFacts`.
// // - Inside the function make an API call to the below URL using async/await, and save it to a variable called `response`.
// // - Create a variable called `results` where you await the json of your response variable.
// // - Console.log the length of `results`.

// // ```
// // https://noroff.herokuapp.com/v1/cat-facts/facts

// async function getCatFacts() {
//   const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
//   const response = await fetch(url);
//   const results = await response.json();

//   console.log(results.length);
// }
// getCatFacts();

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

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

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

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.length))
  .catch((error) => console.log(error));

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

// enclosed in a function
function gettCat {


fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
  .then((response) => response.json())
  .then((data) => console.log(data.length))
  .catch((error) => console.log(error));
}