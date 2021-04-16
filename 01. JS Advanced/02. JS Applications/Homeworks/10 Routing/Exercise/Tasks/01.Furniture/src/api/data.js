import * as api from './api.js';


const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllFurtiture() {
    const data = await api.get(host + '/data/catalog');
    return data;
}

export async function furnitureById(id) {
    return await api.get(host + '/data/catalog/' + id);
}

export async function updateRecord(id, data) {
    return await api.put(host + '/data/catalog/' + id, data);
}

export async function createRecord(data) {
    return await api.post(host + '/data/catalog', data);
}

export async function deleteRecord(id) {
    return await api.del(host + '/data/catalog/' + id);
}


export async function myFurniture() {
    const id = sessionStorage.getItem('userId');
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${id}%22`)
}