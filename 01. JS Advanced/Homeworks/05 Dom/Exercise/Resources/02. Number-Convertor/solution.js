function solve() {

    let dropDownMenu = document.getElementById('selectMenuTo');
    let numberInput = document.getElementById('input');
    let resultBox = document.getElementById('result');
    let button = document.getElementsByTagName('button')[0];

    let binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';

    let hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';

    dropDownMenu.appendChild(binary);
    dropDownMenu.appendChild(hexadecimal);


    // dropDownMenu.innerHTML = `<option selected value=""></option>
    // <option selected value="binary">Binary</option>
    // <option selected value="hexadecimal">Hexadecimal</option>`


    let object = {
        binary: (number) => { return number.toString(2) },
        hexadecimal: (number) => { return number.toString(16).toUpperCase() },
    }

    button.addEventListener('click', () => {
        resultBox.value = object[dropDownMenu.value](Number(numberInput.value));
        console.log(object[dropDownMenu.v])
    })


}