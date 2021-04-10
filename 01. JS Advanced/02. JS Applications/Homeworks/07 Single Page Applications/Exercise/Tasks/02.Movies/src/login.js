let main;
let section;



export function setupLogin(mainElement, sectionElement) {
    main = mainElement;
    section = sectionElement;
}


export async function showLogin() {
    main.innerHtml = '';
    main.appendChild(section);
}