const calculator = {
  add: (a, b) => {
    if (a === undefined || a === null || typeof a !== "number") {
      throw new Error("The first argument must be a number");
    }
    if (b === undefined || b === null || typeof b !== "number") {
      throw new Error("The second argument must be a number");
    }
    return a + b;
  },

  subtract: (a, b) => {
    if (a === undefined || a === null || typeof a !== "number") {
      throw new Error("The first argument must be a number");
    }
    if (b === undefined || b === null || typeof b !== "number") {
      throw new Error("The second argument must be a number");
    }
    return a - b;
  },

  divide: (a, b) => {
    if (a === undefined || a === null || typeof a !== "number") {
      throw new Error("The first argument must be a number");
    }
    if (b === undefined || b === null || typeof b !== "number") {
      throw new Error("The second argument must be a number");
    }
    return a / b;
  },

  multiply: (a, b) => {
    if (a === undefined || a === null || typeof a !== "number") {
      throw new Error("The first argument must be a number");
    }
    if (b === undefined || b === null || typeof b !== "number") {
      throw new Error("The second argument must be a number");
    }
    return a * b;
  },
};

export default calculator;
