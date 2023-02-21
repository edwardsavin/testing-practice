import capitalize from "../capitalize";

test("capitalize should capitalize the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize should throw an error if the argument is undefined", () => {
  expect(() => capitalize(undefined)).toThrow();
});

test("capitalize should throw an error if the argument is null", () => {
  expect(() => capitalize(null)).toThrow();
});

test("capitalize should throw an error if the argument is an empty string", () => {
  expect(() => capitalize("")).toThrow();
});

test("capitalize should throw an error if the argument is not a string", () => {
  expect(() => capitalize(123)).toThrow();
});
