function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');


    let opt = document.createElement('option');

    opt.textContent = text.value;
    opt.value = value.value;

    menu.appendChild(opt);


    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';




}