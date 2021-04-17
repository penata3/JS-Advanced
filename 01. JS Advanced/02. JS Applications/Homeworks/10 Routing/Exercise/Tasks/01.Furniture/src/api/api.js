export const settings = {
    host: ''
}


async function request(url, options) {

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {

            const data = await response.json();
            return data;

        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}


function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    }

    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}


export async function get(ulr) {
    return await request(ulr, getOptions());
}

export async function post(url, data) {
    await request(url, getOptions('post', data));
}


export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}


export async function login(email, password) {
    const result = await post(settings.host + '/users/login', { email, password });
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);

    return result;
}


export async function register(email, password) {
    const result = await post(settings.host + '/users/register', { email, password });
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('email', result.email);
    return result;
}


export async function logout() {
    await get(settings.host + '/users/logout');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
}