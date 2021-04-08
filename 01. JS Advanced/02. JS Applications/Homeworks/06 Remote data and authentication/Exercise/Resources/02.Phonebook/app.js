function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getAllNumbersFromServer);
    document.getElementById('btnCreate').addEventListener('click', createNumber);
    document.getElementById('phonebook').addEventListener('click', deleteNumber)
}

attachEvents();


async function getAllNumbersFromServer() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';


    const data = await response.json();

    Object.values(data).forEach(r => {
        const liItem = document.createElement('li');
        liItem.textContent = `${r.person}: ${r.phone}`;
        liItem.setAttribute('id', r._id);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        liItem.appendChild(deleteBtn);
        ul.appendChild(liItem);
    });
};

async function createNumber(event) {
    event.preventDefault();
    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone })
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();

    console.log(data);

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    getAllNumbersFromServer();
}

async function deleteNumber(e) {
    if (e.target.textContent == 'Delete') {

        const id = e.target.parentNode.id

        const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        getAllNumbersFromServer();
    }
}