export const get = async function (url) {
    try {
        const response = await fetch(url, {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const status = response.status;

        if (response.ok) {
            const jsonData = await response.json();
            return {
                success: true,
                status,
                payload: jsonData,
            }
        } else {
            const jsonData = await response.json();
            return {
                success: false,
                status,
                message: jsonData.message || 'Unknown error'
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP: Error while getting.", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
        }
    }
}

export const postJson = async function (url, data) {
    try {
        const response = await fetch(url, {
            credentials: "include",
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const status = response.status;

        if (response.ok) {
            const jsonData = await response.json();
            return {
                success: true,
                status,
                payload: jsonData,
            }
        } else {
            const jsonData = await response.json();
            return {
                success: false,
                status,
                message: jsonData.message || "Unknown error",
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP: Error while post request.", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
        }
    }
}

export const postForm = async function (url, form) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: form,
            redirect: "follow"
        });

        const status = response.status;

        if (response.ok) {
            const jsonData = await response.json();
            return {
                success: true,
                status,
                payload: jsonData,
            }
        } else {
            const jsonData = await response.json();
            return {
                success: false,
                status,
                message: jsonData.message || "Unknown error",
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP Error while posting form", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
        }
    }
}
