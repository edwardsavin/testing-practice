function capitalize(string) {
  if (
    string === undefined ||
    string === null ||
    string === "" ||
    typeof string !== "string"
  ) {
    throw new Error("Please provide a valid string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;
