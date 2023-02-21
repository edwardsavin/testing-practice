function reverseString(str) {
  if (
    str === undefined ||
    str === null ||
    str === "" ||
    typeof str !== "string"
  ) {
    throw new Error("Please provide a valid string");
  }

  return str.split("").reverse().join("");
}

export default reverseString;
