let main;
let section;

export function setUpRegistration(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showRegistration() {
    main.appendChild(section);
}