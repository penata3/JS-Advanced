import { towns } from './towns.js'
import { html, render } from '../node_modules/lit-html/lit-html.js';

const container = document.body;

const listTemplate = (data, match) => html `
<article>
        <div id="towns">
            <ul>
             ${data.map(town => html`<li class=${(match && town.toLowerCase().includes(match.toLowerCase())) ? 'active' : 'non'}>${town}</li>`)}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click=${onClick}>Search</button>
        <div id="result">${countMatches(towns,match)}</div>
    </article>
`;


function update(match=''){
    const result = listTemplate(towns,match);
    render(result,container);
}

function onClick(){
  const match = document.getElementById('searchText').value;
  countMatches(towns,match)
  update(match);
    
}

function countMatches(towns,match) {
    const matchesCount = towns.filter(t=> match && t.toLowerCase().includes(match.toLowerCase())).length;

    if(matchesCount){
        return `${matchesCount} matches found`
    } else {
        return ``;      
    }
}

update();