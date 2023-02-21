function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  if (array === null || array === undefined || array.length === 0) {
    throw new Error("Argument must be a valid array");
  }

  // If any element in the array is not a number, throw an error
  if (array.some((element) => typeof element !== "number")) {
    throw new Error("Argument must be an array of numbers");
  }

  // Calculate the average, min, max, and length of the array
  const average = array.reduce((a, b) => a + b) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, min, max, length };
}

export default analyzeArray;
