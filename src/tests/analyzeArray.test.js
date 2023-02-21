import analyzeArray from "../analyzeArray";

test("analyzeArray should return an object", () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe("object");
});

test("analyzeArray should return an object with the correct properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average");
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min");
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max");
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length");
});

test("analyzeArray should return the correct average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("analyzeArray should return the correct min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyzeArray should return the correct max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyzeArray should return the correct length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("analyzeArray should throw an error if argument is not an array", () => {
  expect(() => analyzeArray("hello")).toThrow();
});

test("analyzeArray should throw an error if argument is undefined", () => {
  expect(() => analyzeArray(undefined)).toThrow();
});

test("analyzeArray should throw an error if argument is null", () => {
  expect(() => analyzeArray(null)).toThrow();
});

test("analyzeArray should throw an error if argument is an empty array", () => {
  expect(() => analyzeArray([])).toThrow();
});

test("analyzeArray should throw an error if argument is not an array only of numbers", () => {
  expect(() => analyzeArray([1, 2, 3, "hello"])).toThrow();
});
