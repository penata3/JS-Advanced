function attachEvents() {
    getAllMessages();
    document.getElementById('submit').addEventListener('click', createMessage);
    document.getElementById('refresh').addEventListener('click', getAllMessages);
}

attachEvents();

async function getAllMessages() {

    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();
    const messages = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
    document.getElementById('messages').innerHTML = messages;
}


async function createMessage() {

    const author = document.getElementsByName('author')[0].value;
    const content = document.getElementsByName('content')[0].value;

    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, content })
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    document.getElementsByName('author')[0].value = '';
    document.getElementsByName('content')[0].value = '';

    //getAllMessages();
}