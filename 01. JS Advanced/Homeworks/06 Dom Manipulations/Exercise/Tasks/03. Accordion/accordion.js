function toggle() {
    const divToDisplay = document.getElementById('extra');
    const button = document.querySelector('.button');

    if (divToDisplay.style.display === 'block') {
        divToDisplay.style.display = 'none';
    } else {
        divToDisplay.style.display = 'block';
    }


    button.textContent = button.textContent === 'More' ? button.textContent = "Less" : button.textContent = "More";
}