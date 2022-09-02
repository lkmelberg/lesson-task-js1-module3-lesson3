// ### Question 1

// Write code that checks if the below variable is truthy, log the string "truthy" if it is, and "falsy" if not.

const menuIsOpen = false;

if (menuIsOpen) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// ### Question 2

// Based on the below URL, what are the different querystring parameters and their respective values?

// ```
// https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354
// ```

// platforms is a parameter with a value of 4
// genres is a parameter with a value of action
// publishers is a parameter with a value of 354

// ### Question 3

// - Create an async function called `getCatFacts`.
// - Inside the function make an API call to the below URL using async/await, and save it to a variable called `response`.
// - Create a variable called `results` where you await the json of your response variable.
// - Console.log the length of `results`.

// ```
// https://noroff.herokuapp.com/v1/cat-facts/facts

async function getCatFacts() {
  const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";
  const response = await fetch(url);
  const results = await response.json();

  console.log(results.length);
}
getCatFacts();
