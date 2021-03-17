function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = Number(firstNumber.value) - Number(secondNumber.value);

    const resultField = document.getElementById('result');
    resultField.textContent = result;
    console.log(result);
}