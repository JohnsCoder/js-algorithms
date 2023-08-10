function MissingDigit(str) {
  const splitPerEqual = str.split("=").map((e) => e.trim());
  const operations = ["*", "/", "+", "-"];

  function getInverseOperation(num1, num2, operation, inverse) {
    if (inverse) {
      switch (operation) {
        case "*":
          return num2 / num1;
        case "/":
          return num2 * num1;
        case "+":
          return num2 - num1;
        case "-":
          return num2 + num1;
      }
    }
    switch (operation) {
      case "*":
        return num2 * num1;
      case "/":
        return num2 / num1;
      case "+":
        return num2 + num1;
      case "-":
        return num2 - num1;
    }
  }

  const getIcognitoIndex = str
    .split(" ")
    .filter((e) => e.includes("x"))[0]
    .indexOf("x");

  let operation;
  for (let i = 0; i < 4; i++) {
    if (splitPerEqual[0].includes(operations[i])) {
      operation = operations[i];
    }
  }
  let res;
  if (splitPerEqual[0].includes("x")) {
    const num1 = parseInt(
      splitPerEqual[0].split(" ").filter((e) => !isNaN(e))[0]
    );
    const num2 = parseInt(
      splitPerEqual[1].split(" ").filter((e) => !isNaN(e))[0]
    );
    res = getInverseOperation(num1, num2, operation, true);
  }
  if (splitPerEqual[1].includes("x")) {
    const num1 = parseInt(
      splitPerEqual[0].split(" ").filter((e) => !isNaN(e))[0]
    );
    const num2 = parseInt(
      splitPerEqual[0].split(" ").filter((e) => !isNaN(e))[1]
    );
    res = getInverseOperation(num1, num2, operation, false);
  }

  return Math.abs(res).toString().charAt(getIcognitoIndex);
}
console.log(MissingDigit("257 * 37x = 97146"));
