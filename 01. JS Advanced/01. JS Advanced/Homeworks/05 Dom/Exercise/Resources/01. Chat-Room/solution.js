function solve() {
    let button = document.getElementById('send');
    let chatField = document.getElementById('chat_messages');
    let chatInput = document.getElementById('chat_input');

    button.addEventListener('click', () => {
        let newDiv = document.createElement('div');
        newDiv.textContent = chatInput.value;
        newDiv.classList.add('message', 'my-message');
        chatField.appendChild(newDiv);
        chatInput.value = '';

    })

}