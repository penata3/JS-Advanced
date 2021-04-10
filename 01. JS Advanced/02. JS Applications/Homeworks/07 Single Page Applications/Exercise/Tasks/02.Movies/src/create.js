let main;
let section;


export function setUpCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}


export function showCreate() {
    main.innerHtml = '';
    main.appendChild(section);
}