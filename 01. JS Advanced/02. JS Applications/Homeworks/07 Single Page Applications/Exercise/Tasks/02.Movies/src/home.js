let main;
let section;


export function setUpHomePage(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}


export async function showHomePage() {

    await main.appendChild(section);
}