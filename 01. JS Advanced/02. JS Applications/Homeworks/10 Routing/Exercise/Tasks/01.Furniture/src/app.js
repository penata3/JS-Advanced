import page from '../node_modules/page/page.mjs'
import { render } from '../../node_modules/lit-html/lit-html.js'

import { catalogPage } from './views/catalog.js'
import { createPage } from './views/create.js'
import { dashboardPage } from './views/dashboard.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { loginPage } from './views/login.js'
import { myPage } from './views/myFurniture.js'
import { registerPage } from './views/register.js'
import { logout, myFurniture } from './api/data.js'
document.getElementById('logoutBtn').addEventListener('click', async() => {
    await logout();
    setNavigation();
})

const main = document.querySelector('.container');



page('/', decorateContext, dashboardPage);

page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/login', decorateContext, loginPage);
page('/my-furniture', decorateContext, myPage);
page('/register', decorateContext, registerPage);
setNavigation();
page.start();






function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNavigation = setNavigation;
    next();
}

function setNavigation() {
    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
}