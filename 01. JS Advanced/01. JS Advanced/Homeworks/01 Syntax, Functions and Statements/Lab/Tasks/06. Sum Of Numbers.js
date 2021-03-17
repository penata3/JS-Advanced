function sumOfNumbers(a, b) {
    let firstNumber = Number(a);
    let secondNumber = Number(b);
    let result = 0;

    for (let index = firstNumber; index <= secondNumber; index++) {
        result += index;
    }

    console.log(result);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');