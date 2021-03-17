function addItem() {
    let inputField = document.getElementsByTagName('input')[0];
    let list = document.getElementById('items');

    let listItem = document.createElement('li');
    listItem.textContent = inputField.value;
    list.appendChild(listItem);

    inputField.value = '';

}