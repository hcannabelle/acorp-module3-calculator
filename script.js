//Javascript Calculator Code

//Get array of numbers from buttons pressed on calculator - first input
let input1 = [];
const createInput1 = () => {
  const addToInput1 = createInput1.push();
  return addToInput1;
};

//Get array of "numbers' from buttons pressed on calculator - second input
let input2 = [];
const createInput2 = () => {
  const addToInput2 = input2 + createInput2.push();
  return addToInput2;
};

//Get single array of 'number' w no delimeter - first input
const input1ToSingleArray = () => {
  const createArray1 = input1.join("");
  return createArray1;
};

//Get single array of 'number' w no delimiter - second input
const input2ToSingleArray = () => {
  const createArray2 = input2.join("");
  return createArray2;
};

//Convert array to integer - first input
const convertToNum1 = () => {
  const convertNum1 = createArray1.map(Number);
  return convertNum1;
};

//Convert array to integer - second input
const convertToNum2 = () => {
  const convertNum2 = createArray2.map(Number);
  return convertNum2;
};

const num1 = [];
const num2 = [];

const solveAddition = (num1, num2) => {
  const additionSolution = num1 + num2;
  return additionSolution;
};

const solveSubtraction = (num1, num2) => {
  const subtractionSolution = num1 - num2;
  return subtractionSolution;
};

const solveDivision = (num1, num2) => {
  const divisionSolution = num1 / num2;
  return divisionSolution;
};

const solveMultiplication = (num1, num2) => {
  const multiplicationSolution = num1 + num2;
  return multiplicationSolution;
};

//Logic to determine which operator should be used against first and second input
const addOperator = () => {
  if ((id = "addition")) {
    return solveAddition();
  } else if ((id = "subtraction")) {
    return solveSubtraction();
  } else if ((id = "division")) {
    return solveSubtraction();
  } else {
    return solveMultiplication();
  }
};
