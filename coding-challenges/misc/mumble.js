/*----------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------*/

const mumble = (string) => {
  string = string.split("");

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    for (let j = 0; j < i; j++) {
      string[i] += currentChar;
    }
  }

  return string.join("-");
};

//test

console.log(mumble("hello"));
console.log(mumble("my name is Meg"));
