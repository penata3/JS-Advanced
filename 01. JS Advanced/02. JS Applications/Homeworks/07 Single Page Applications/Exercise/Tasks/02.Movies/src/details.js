let main;
let section;

document.getElementById('details-link').addEventListener('click', showDetails);

export function setUpDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails() {
    main.appendChild(section);
}