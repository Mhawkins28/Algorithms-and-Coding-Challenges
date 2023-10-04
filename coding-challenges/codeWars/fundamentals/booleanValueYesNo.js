/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

bool = false;
console.log(boolToWord(bool));
bool = true;
console.log(boolToWord(bool));
