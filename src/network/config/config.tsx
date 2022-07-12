
const headers = {
    'Content-Type': 'application/json'
}

export const getCall = async (url: string) => {
    const resp = await fetch(url);
    return resp.json();
}

export const postCall = (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'POST',
        body,
        headers
    }
    return fetch(url, requestOptions);
}

export const putCall = (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'PUT',
        body,
        headers
    }
    return fetch(url, requestOptions);
}

export const patchCall = (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'PATCH',
        body,
        headers
    }
    return fetch(url, requestOptions);
}

export const deleteCall = (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'DELETE',
        body,
        headers
    }
    return fetch(url, requestOptions);
}

export const setPrefixUrl = (resource: string) => `http://localhost:3000/api/v1/${resource}`