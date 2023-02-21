import reverseString from "../reverseString";

test("reverseString should reverse the string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverseString should throw an error if the argument is undefined", () => {
  expect(() => reverseString(undefined)).toThrow();
});

test("reverseString should throw an error if the argument is null", () => {
  expect(() => reverseString(null)).toThrow();
});

test("reverseString should throw an error if the argument is an empty string", () => {
  expect(() => reverseString("")).toThrow();
});

test("reverseString should throw an error if the argument is not a string", () => {
  expect(() => reverseString(123)).toThrow();
});
