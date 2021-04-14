import { html, render } from '../node_modules/lit-html/lit-html.js';

const container = document.querySelector('div');
const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';



const template = (data) => html `
<select id="menu">
    ${data.map(t => html`<option value=${t.id}'>${t.text}</option>`)}
</select>
`



async function initialize() {

    const response = await fetch(endpoint);
    const data = await response.json();
    const list = Object.values(data);
    update(list);
}

initialize();

function update(list){
    const result = template(list);
    render(result,container);
}