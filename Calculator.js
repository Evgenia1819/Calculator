function calculator(firstNumber, operator, secondNumber) {
   let result = eval(`${firstNumber} ${operator} ${secondNumber}`);
   console.log(result);
}

calculator (5 ,'+', 10);
calculator(25.5, '-', 3);
