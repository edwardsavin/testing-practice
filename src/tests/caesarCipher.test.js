import caesarCipher from "../caesarCipher";

test("caesarCipher should return the correct output based on shift", () => {
  expect(caesarCipher("hey", 1)).toBe("ifz");
});

test("caesarCipher should return the correct output based on shift", () => {
  expect(caesarCipher("Hello, World!", 2)).toBe("Jgnnq, Yqtnf!");
});

test("caesarCipher should return the correct output based on shift", () => {
  expect(caesarCipher("Zuzu", 24)).toBe("Xsxs");
});

test("caesarCipher should throw and error if first argument is not a string", () => {
  expect(() => caesarCipher(1, 1)).toThrow();
});

test("caesarCipher should throw an error if first argument is undefined", () => {
  expect(() => caesarCipher(undefined, 1)).toThrow();
});

test("caesarCipher should throw an error if first argument is null", () => {
  expect(() => caesarCipher(null, 1)).toThrow();
});

test("caesarCipher should throw an error if first argument is an empty string", () => {
  expect(() => caesarCipher("", 1)).toThrow();
});

test("caesarCipher should throw an error if second argument is not a number", () => {
  expect(() => caesarCipher("Zuzu", "1")).toThrow();
});

test("caesarCipher should throw an error if second argument is undefined", () => {
  expect(() => caesarCipher("Zuzu", undefined)).toThrow();
});

test("caesarCipher should throw an error if second argument is null", () => {
  expect(() => caesarCipher("Zuzu", null)).toThrow();
});

test("caesarCipher should throw an error if second argument is bigger than 25", () => {
  expect(() => caesarCipher("Zuzu", 26)).toThrow();
});

test("caesarCipher should throw an error if second argument is lower than 0", () => {
  expect(() => caesarCipher("Zuzu", -4)).toThrow();
});

test("caesarCipher should throw an error if second argument is a float", () => {
  expect(() => caesarCipher("Zuzu", 1.5)).toThrow();
});
