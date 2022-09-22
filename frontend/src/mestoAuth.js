export const BASE_URL = 'http://localhost:4000'

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: password, email: email })
    })
        .then((res) => {
            console.log(res)
            try {
                if (res.status === 200) {
                    return res.JSON()
                }
            } catch (e) {
                console.log(e);
                return (e)
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        })
}
export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data;
            }
        })
        .catch(err => console.log(err))
}

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    })
        .then(res => res.json())
        .then((data) => {
            return data;
        })
}

export const signOut = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })
        .then((res => res))
        .catch(err => console.log(err))
}