function calculator(firstNumber, operator, secondNumber) {
   let result;
  
    if (operator === '+') {
     result = firstNumber + secondNumber;
}  else if (operator === '-') {
     result = firstNumber - secondNumber;
}  else if (operator === '*') {
      result = firstNumber * secondNumber;
}  else if (operator === '/') {
     result = firstNumber / secondNumber;
}

console.log(result.toFixed(2));

}

calculator (5 ,'+', 10);
calculator(25.5, '-', 3);
