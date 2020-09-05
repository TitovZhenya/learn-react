import { TProfile, TPhoto } from "../types/types";

let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

export enum ResultCode {
    Success = 0,
    Error = 1
}

interface IResponse {
    data: {}
    resultCode: ResultCode
    messages: Array<string>
}

interface IItems {
    name: string
    id: number
    photos: TPhoto
    status: string
    followed: boolean
}

interface IGetUsers {
    items: Array<IItems>
    totalCount: number
    error: null
}

export const usersAPI = {
    getUsers(page: number = 1, count: number = 10): Promise<IGetUsers> {
        return fetch(`${baseURL}users?count=${count}&page=${page}`, {
            method: 'GET',
            credentials: 'include'
        }).then(respose => respose.json())
    },
    unFollow(userId: number): Promise<IResponse> {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(respose => respose.json())
    },
    follow(userId: number): Promise<IResponse> {
        return fetch(`${baseURL}follow/${userId}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(respose => respose.json())
    }
}

interface ISavePhoto{
    data: TPhoto
    resultCode: ResultCode
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number | null): Promise<TProfile> {
        return fetch(`${baseURL}profile/${userId}`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json())
    },
    getStatus(userId: number) {
        return fetch(`${baseURL}profile/status/${userId}`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.text());
    },
    updateStatus(status: string): Promise<IResponse> {
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
    savePhoto(photo: any): Promise<ISavePhoto> {
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
    updateProfile(profileData: TProfile) {
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

export enum ResulCodeCaptha {
    CapthaIsRequired = 10
}

interface IMeResponse {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}

interface ILoginResponse {
    data: {
        id: number
    }
    resultCode: ResultCode | ResulCodeCaptha
    messages: Array<string>
}

interface ILogoutResponse {
    data: {}
    resultCode: ResultCode | ResulCodeCaptha
    messages: Array<string>
}

export const authAPI = {
    me(): Promise<IMeResponse> {
        return fetch(`${baseURL}auth/me`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json());
    },
    login(email: string, password: any, rememberMe: any, captcha: string = ''): Promise<ILoginResponse> {
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
    logout(): Promise<ILogoutResponse> {
        return fetch(`${baseURL}/auth/login`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': '1d26d38d-02ca-4434-bb85-10cf30808e34'
            }
        }).then(response => response.json());
    }
}

interface ICapthaResponse {
    url: string
}

export const securityAPI = {
    getCaptcha(): Promise<ICapthaResponse> {
        return fetch(`${baseURL}security/get-captcha-url`, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json());
    }
}