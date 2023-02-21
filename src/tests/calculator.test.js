import calculator from "../calculator";

// Add calculator.add tests
test("calculator add should add two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator add should add two numbers even if a number is negative", () => {
  expect(calculator.add(-9, 7)).toBe(-2);
});

test("calculator add should add two numbers even if a number is a decimal", () => {
  expect(calculator.add(19, 4.7379)).toBe(23.7379);
});

test("calculator add should throw an error if the first argument is undefined", () => {
  expect(() => calculator.add(undefined, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is null", () => {
  expect(() => calculator.add(null, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is not a number", () => {
  expect(() => calculator.add("1", 2)).toThrow();
});

test("calculator add should throw an error if the second argument is undefined", () => {
  expect(() => calculator.add(1, undefined)).toThrow();
});

test("calculator add should throw an error if the second argument is null", () => {
  expect(() => calculator.add(1, null)).toThrow();
});

test("calculator add should throw an error if the second argument is not a number", () => {
  expect(() => calculator.add(1, "2")).toThrow();
});

// Add calculator.subtract tests
test("calculator subtract should subtract two numbers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("calculator subtract should subtract two numbers even if a number is negative", () => {
  expect(calculator.subtract(-9, 7)).toBe(-16);
});

test("calculator add should add two numbers even if a number is a decimal", () => {
  expect(calculator.subtract(19, 4.7379)).toBe(14.2621);
});

test("calculator add should throw an error if the first argument is undefined", () => {
  expect(() => calculator.subtract(undefined, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is null", () => {
  expect(() => calculator.subtract(null, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is not a number", () => {
  expect(() => calculator.subtract("1", 2)).toThrow();
});

test("calculator add should throw an error if the second argument is undefined", () => {
  expect(() => calculator.subtract(1, undefined)).toThrow();
});

test("calculator add should throw an error if the second argument is null", () => {
  expect(() => calculator.subtract(1, null)).toThrow();
});

test("calculator add should throw an error if the second argument is not a number", () => {
  expect(() => calculator.subtract(1, "2")).toThrow();
});

// Add calculator.divide tests
test("calculator divide should divide two numbers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("calculator divide should divide two numbers even if a number is negative", () => {
  expect(calculator.divide(-9, 3)).toBe(-3);
});

test("calculator add should add two numbers even if a number is a decimal", () => {
  expect(calculator.divide(19, 4.7379)).toBeCloseTo(4.01);
});

test("calculator add should throw an error if the first argument is undefined", () => {
  expect(() => calculator.divide(undefined, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is null", () => {
  expect(() => calculator.divide(null, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is not a number", () => {
  expect(() => calculator.divide("1", 2)).toThrow();
});

test("calculator add should throw an error if the second argument is undefined", () => {
  expect(() => calculator.divide(1, undefined)).toThrow();
});

test("calculator add should throw an error if the second argument is null", () => {
  expect(() => calculator.divide(1, null)).toThrow();
});

test("calculator add should throw an error if the second argument is not a number", () => {
  expect(() => calculator.divide(1, "2")).toThrow();
});

// Add calculator.multiply tests
test("calculator multiply should multiply two numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("calculator multiply should multiply two numbers even if a number is negative", () => {
  expect(calculator.multiply(-9, 3)).toBe(-27);
});

test("calculator add should add two numbers even if a number is a decimal", () => {
  expect(calculator.multiply(19, 4.7379)).toBeCloseTo(90.02);
});

test("calculator add should throw an error if the first argument is undefined", () => {
  expect(() => calculator.multiply(undefined, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is null", () => {
  expect(() => calculator.multiply(null, 2)).toThrow();
});

test("calculator add should throw an error if the first argument is not a number", () => {
  expect(() => calculator.multiply("1", 2)).toThrow();
});

test("calculator add should throw an error if the second argument is undefined", () => {
  expect(() => calculator.multiply(1, undefined)).toThrow();
});

test("calculator add should throw an error if the second argument is null", () => {
  expect(() => calculator.multiply(1, null)).toThrow();
});

test("calculator add should throw an error if the second argument is not a number", () => {
  expect(() => calculator.multiply(1, "2")).toThrow();
});
