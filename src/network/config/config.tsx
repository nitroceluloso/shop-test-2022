
const headers = {
    'Content-Type': 'application/json'
}

export const getCall = async (url: string) => {
    const resp = await fetch(url);
    return resp.json();
}

export const postCall = async (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'POST',
        body,
        headers
    }
    const resp = await fetch(url, requestOptions);
    return resp.json();
}

export const putCall = async (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'PUT',
        body,
        headers
    }
    const resp =  await fetch(url, requestOptions);
    return resp.json();
}

export const patchCall = async(url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'PATCH',
        body,
        headers
    }
    const resp = await fetch(url, requestOptions);
    return resp.json();
}

export const deleteCall = async (url: string, data: any) => {
    const body = JSON.stringify(data);
    const requestOptions = {
        method: 'DELETE',
        body,
        headers
    }
    const resp = await fetch(url, requestOptions);
    return resp.json();
}

export const setPrefixUrl = (resource: string) => `http://localhost:3000/api/v1/${resource}`