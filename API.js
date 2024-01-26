

export const get = function (url, callback, apiUrl) {
    const API_URL = apiUrl;
    let status = 500;
    fetch(API_URL + url, {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) { return null }
                return response.json()
            }
            // throw new Error(response.status)
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                if (callback && typeof callback === 'function') {
                    callback({
                        success: true,
                        status,
                        payload: jsonData
                    })
                }
            }
        })
        .catch((error) => {
            if (callback && typeof callback === 'function') {
                callback({
                    success: false,
                    status,
                    message: isNaN(error.message)
                        ? error.message
                        : parseInt(error.message)
                })
            }
        })
}

export const deleteRequest = function (url, callback, apiUrl) {
    const API_URL = apiUrl;
    let status = 500;
    fetch(API_URL + url, {
        credentials: 'same-origin',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) {
                    return null
                }
                return response.json()
            }
            throw new Error(response.status)
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                if (callback && typeof callback === 'function') {
                    callback({
                        success: true,
                        status,
                        payload: jsonData
                    })
                }
            }
        })
        .catch((error) => {
            if (callback && typeof callback === 'function') {
                callback({
                    success: false,
                    status,
                    message: isNaN(error.message)
                        ? error.message
                        : parseInt(error.message)
                })
            }
        })
}

export const put = function (url, data, callback, apiUrl) {
    const API_URL = apiUrl;
    if (callback === undefined) {
        callback = data
        data = null
    }
    let status = 500
    fetch(API_URL + url, {
        credentials: 'same-origin',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) return null
                return response.json()
            }
            throw new Error(response.status)
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                if (callback && typeof callback === 'function') {
                    callback({
                        success: true,
                        payload: jsonData
                    })
                }
            }
        })
        .catch((error) => {
            if (callback && typeof callback === 'function') {
                callback({
                    success: false,
                    status,
                    message: isNaN(error.message)
                        ? error.message
                        : parseInt(error.message)
                })
            }
        })
}

export const postData = function (url, data, callback) {
    let status = 500
    if (callback === undefined) {
        callback = data
        data = null
    }

    fetch(`${API_URL}${url}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) {
                    return null
                }
                return response.json()
            } else {
                return response.text()
            }
            // throw new Error(response);
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    success: true,
                    status,
                    payload: jsonData
                })
            }
        })
        .catch((error) => {
            callback({
                success: false,
                status,
                message: isNaN(error.message)
                    ? error.message
                    : parseInt(error.message)
            })
        })
}

export const postForm = function (url, data, callback) {
    if (callback === undefined) {
        callback = data
        data = null
    }
    let status = 500

    const headers = new Headers()
    headers.append('Accept', 'application/json')
    // headers.append("Content-Type", "application/json");

    fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers,
        body: data,
        redirect: 'follow'
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) {
                    return null
                }
                return response.json()
            } else {
                return response.json()
            }
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    success: true,
                    status,
                    payload: jsonData
                })
            }
        })
        .catch((error) => {
            console.warn('Error: ', error)
            callback({
                success: false,
                status,
                message: isNaN(error.message)
                    ? error.message
                    : parseInt(error.message)
            })
            return { status }
        })
}

export const postFormBrowser = function (url, data, callback) {
    if (callback === undefined) {
        callback = data
        data = null
    }
    let status = 500

    const headers = new Headers()
    headers.append('Accept', 'application/json')
    // headers.append("Content-Type", "application/json");

    fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers,
        body: data,
        redirect: 'follow'
    })
        .then(function (response) {
            status = response.status
            if (response.ok) {
                if (response.status === 204) {
                    return null
                }
                return response.json()
            } else {
                return response.text()
            }
        })
        .then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    status,
                    payload: jsonData
                })
            }
        })
        .catch((error) => {
            callback({
                status,
                payload: error
            })
            return { status }
            /* callback({
                statusCode: status,
                success: false,
            }); */
        })
}
