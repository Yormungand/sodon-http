export const sodonGet = async function (url) {
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
                message: jsonData.message || 'Unknown error',
                payload: jsonData,
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP: Error while getting.", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
            payload: e,
        }
    }
}

export const sodonPostJson = async function (url, data) {
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
                payload: jsonData,
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP: Error while post request.", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
            payload: e,
        }
    }
}

export const sodonPostForm = async function (url, form) {
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
                payload: jsonData,
            }
        }
    } catch (e) {
        console.warn("SODON-HTTP Error while posting form", e);
        return {
            success: false,
            status: 500,
            message: e.message || "Unknown error",
            payload: e,
        }
    }
}

export const sodonPut = async (url, data) => {
    try {
        let object;
        if (data && typeof data !== "object" && typeof data === "string"){
            return {
                success: false,
                status: 0,
                message: "Leave stringifying to me. Provide put data as object please",
            }
        }
        const response = await fetch(url, {

        });

    } catch (e) {
        console.warn(e);
    }
}
