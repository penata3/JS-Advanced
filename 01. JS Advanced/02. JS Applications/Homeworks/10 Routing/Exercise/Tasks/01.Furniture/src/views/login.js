import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../api/data.js'

const temlate = (onSubmit) => html `
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`



export async function loginPage(ctx) {
    ctx.render(temlate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const passowrd = formData.get('password');

        if (passowrd == '' || email == '') {
            return alert('All field are required');
        }
        await login(email, passowrd);
        ctx.setNavigation();
        ctx.page.redirect('/');

    }

}