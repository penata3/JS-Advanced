import { html, render } from '../node_modules/lit-html/lit-html.js'

const container = document.querySelector('tbody');
const input = document.getElementById('searchField');

const tableRowTepmale = (rowData, select) => html `
<tr class=${select? 'select' : ''}>
   <td>${rowData.fistName} ${rowData.lastName}</td>
   <td>${rowData.email}</td>
   <td>${rowData.course}</td>
</tr>
`

start();

async function start() {

    document.getElementById('searchBtn').addEventListener('click', () => {
        update(list, input.value);
    })

    const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    const data = await response.json();
    let list = Object.values(data);
    update(list);

}


function update(data, match = '') {
    const result = data.map(tr => tableRowTepmale(tr, compare(tr, match)));
    render(result, container);
}


function compare(item, match) {
    return Object.values(item).some(i => match && i.toLowerCase().includes(match.toLowerCase()))
}