function addItem() {
    let newText = document.getElementById('newText');
    let items = document.getElementById('items');


    let listItem = document.createElement('li');
    listItem.textContent = newText.value;

    let anchor = document.createElement('a');
    anchor.textContent = '[Delete]';
    anchor.href = '#';


    listItem.appendChild(anchor);

    items.appendChild(listItem);

    anchor.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

    document.getElementById('newText').value = '';
}