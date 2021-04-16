import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js'

const template = (onSubmit) => html `<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control valid" id="new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`




export async function createPage(ctx) {

    ctx.render(template(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const make = formData.get('make');
        const model = formData.get('model');
        const year = Number(formData.get('year'));
        const price = Number(formData.get('price'));
        const image = formData.get('img');
        const material = formData.get('material');
        const description = formData.get('description');


        if (make.length < 4 || model.length < 4) {
            return alert('Make and model should be at least 4 charecters long');
        }

        if (year < 1950 || year > 2050) {
            return alert('Production year should be betweeen 1950 and 2050!!!!');
        }

        if (description.length < 10) {
            return alert('Description must be at least 10 charecters long');
        }

        if (price < 0) {
            return alert('Price should be a positive number');
        }

        if (image == '') {
            return alert('Image is required');
        }

        await createRecord({ make, model, year, price, description, material, price });

        ctx.page.redirect('/');
    }


}