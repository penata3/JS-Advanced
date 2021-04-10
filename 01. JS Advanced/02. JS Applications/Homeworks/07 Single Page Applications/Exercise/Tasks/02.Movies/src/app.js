import { setUpHomePage, showHomePage } from './home.js'
import { setupLogin, showLogin } from './login.js';
import { setUpRegistration, showRegistration } from './register.js';
import { setUpDetails, showDetails } from './details.js';
import { setUpCreate, showCreate } from './create.js';


const main = document.getElementsByClassName('main')[0];


const navigation = document.querySelector('nav');

const links = {
    'homeLink': showHomePage,
    'loginLink': showLogin,
    'registerLink': showRegistration,
    'details-link': showDetails,
}


setUpSection('home-page', setUpHomePage);
setUpSection('form-login', setupLogin);
setUpSection('form-sign-up', setUpRegistration);
setUpSection('moovie-details', setUpDetails);
setUpSection('add-movie', setUpCreate);
setUpNavigation();
showHomePage();


function setUpNavigation() {
    navigation.addEventListener('click', (event) => {
        if (event.target.tagName == 'A') {
            const view = links[event.target.id];
            if (typeof view == 'function') {
                event.preventDefault();
                main.innerHTML = '';
                view();
            }
        }
    });

    document.getElementById('addLink').addEventListener('click', (e) => {
        e.preventDefault();
        main.innerHTML = '';
        showCreate();
    })




}






function setUpSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
}