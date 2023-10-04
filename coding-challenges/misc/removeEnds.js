/*--------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('hello world!'); //=> "ello world"
removeEnds('a'); //=> "" (empty string)
---------------------------------------------------*/

function removeEnds(str) {
  if (str.length < 3) return "";
  return str.substr(1, str.length - 2);
}

// test

console.log(removeEnds("hello world!"));
