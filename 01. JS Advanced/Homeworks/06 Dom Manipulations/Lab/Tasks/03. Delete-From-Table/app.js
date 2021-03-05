function deleteByEmail() {

    let emails = document.getElementsByTagName('td');
    let inputField = document.getElementsByTagName('input')[0];
    let resultField = document.getElementById('result');


    let isFound = false;

    for (e of emails) {
        if (e.textContent === inputField.value) {
            e.parentNode.remove();
            isFound == true;
        }
    }


    resultField.textContent = isFound === false ? "Not found." : "Deleted."


    document.getElementsByTagName('input')[0].value = '';
}