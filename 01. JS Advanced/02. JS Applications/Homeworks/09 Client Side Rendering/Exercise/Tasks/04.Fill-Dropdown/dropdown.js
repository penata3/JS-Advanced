import { html, render } from '../node_modules/lit-html/lit-html.js';

const container = document.querySelector('div');
const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const form = document.querySelector('form');
let list = [];


const template = (data) => html `
<select id="menu">
    ${data.map(t => html`<option value=${t.id}'>${t.text}</option>`)}
</select>
`
initialize();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputText = document.querySelector('[type="text"]').value;

    const response = await fetch(endpoint, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text: inputText}),
    })
    const  data = await response.json();
    list.push(data);

    update(list);
})


async function initialize() {

    const response = await fetch(endpoint);
    const data = await response.json();
     list = Object.values(data);
    update(list);
}


function update(list){
    const result = template(list);
    render(result,container);
}