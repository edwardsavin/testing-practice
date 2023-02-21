function caesarCipher(string, shift) {
  if (
    typeof string !== "string" ||
    string === "" ||
    string === null ||
    string === undefined
  ) {
    throw new Error("First argument must be a string");
  }

  if (typeof shift !== "number" || shift === null || shift === undefined) {
    throw new Error("Second argument must be a number");
  }

  if (shift > 25 || shift < 0) {
    throw new Error("Shift must be a number between 0 and 25");
  }

  if (shift % 1 !== 0) {
    throw new Error("Shift must be an integer");
  }

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    // Get the character at the current index
    let char = string[i];

    // Check if the character is a letter
    if (char.match(/[a-z]/i)) {
      let index = alphabet.indexOf(char.toLowerCase());
      let newIndex = index + shift;

      // If the new index is greater than 25, subtract 26
      if (newIndex > 25) newIndex = newIndex - 26;

      // If the new index is less than 0, add 26
      if (newIndex < 0) newIndex = newIndex + 26;

      // If the character is uppercase, add the uppercase version of the new character to the result
      if (char === char.toUpperCase()) {
        result += alphabet[newIndex].toUpperCase();
      } else result += alphabet[newIndex];
    } else result += char;
  }

  return result;
}

export default caesarCipher;
