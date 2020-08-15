let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return fetch(`${baseURL}users?count=${count}&page=${page}`, {
            method: 'GET',
            credentials: 'include'
        }).then(respose => respose.json())
    },
    unFollow(userId) {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(respose => respose.json())
    },
    follow(userId) {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(respose => respose.json())
    }
}

export const profileAPI = {
    getProfile(userId) {
        return fetch(`${baseURL}profile/${userId}`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json())
    },
    getStatus(userId) {
        return fetch(`${baseURL}profile/status/${userId}`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.text());
    },
    updateStatus(status) {
        let sp = new URLSearchParams();
        sp.append('status', status);
        return fetch(`${baseURL}profile/status`, {
            method: 'PUT',
            credentials: 'include',
            body: sp,
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34',
            }
        }).then(response => response.json());
    },
    savePhoto(photo) {
        let fd = new FormData();
        fd.append('image', photo);
        return fetch(`${baseURL}profile/photo`, {
            method: 'PUT',
            credentials: 'include',
            body: fd,
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34',
            }
        }).then(response => response.json());
    },
    updateProfile(profileData) {
        return fetch(`${baseURL}profile`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(profileData),
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}

export const authAPI = {
    me() {
        return fetch(`${baseURL}auth/me`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json());
    },
    login(email, password, rememberMe = false, captcha = '') {
        let sp = new URLSearchParams();
        sp.append('email', email);
        sp.append('password', password);
        sp.append('rememberMe', rememberMe);
        sp.append('captcha', captcha);

        return fetch(`${baseURL}auth/login`, {
            method: 'POST',
            credentials: 'include',
            body: sp,
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(response => response.json());
    },
    logout() {
        return fetch(`${baseURL}/auth/login`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(response => response.json());
    }
}

export const securityAPI = {
    getCaptcha() {
        return fetch(`${baseURL}security/get-captcha-url`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json());
    }
}