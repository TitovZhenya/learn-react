let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

export const usersAPI = {
	getUsers(page = 1, count = 10){
		return fetch(`${baseURL}users?count=${count}&page=${page}`, {
				method : 'GET',
				credentials : 'include'
			}).then( respose => respose.json() )
	},
	unFollow(userId){
		return fetch(`${baseURL}follow/${userId}`, {
			method : 'DELETE',
			credentials : 'include',
			headers : {
				'API-KEY' : '1d26d38d-02ca-4434-bb85-10cf30808e34'
			}
		}).then ( respose => respose.json() )
	},
	follow(userId){
		return fetch(`${baseURL}follow/${userId}`, {
			method : 'POST',
			credentials : 'include',
			headers : {
				'API-KEY' : '1d26d38d-02ca-4434-bb85-10cf30808e34'
			}
		}).then ( respose => respose.json() )
	}	
}

export const profileAPI = {
	getProfile(userId){
		return fetch(`${baseURL}profile/${userId}`,{
			method : 'GET',
			credentials : 'include'
		}).then( response => response.json())
	},
	getStatus(userId){
		return fetch(`${baseURL}profile/status/${userId}`, {
			method : 'GET',
			credentials : 'include'
		}).then ( response => response.text());
	},
	updateStatus(status){
		let sp = new URLSearchParams();
		sp.append('status', status);
		return fetch(`${baseURL}profile/status`, {
			method : 'PUT',
			credentials : 'include',
			body : sp,
			headers : {	
				'API-KEY' : '1d26d38d-02ca-4434-bb85-10cf30808e34',
			},

		}).then( response => response.json() );
	}
}

export const authAPI = {
	me(){
		return fetch(`${baseURL}auth/me`,{
			method : 'GET',
			credentials : 'include'
		}).then( response => response.json() )
	},
	login(email, password, rememberMe = false){
		let sp = new URLSearchParams();
		sp.append('email', email);
		sp.append('password', password);
		sp.append('rememberMe', rememberMe);

		return fetch(`${baseURL}auth/login`,{
			method : 'POST',
			credentials : 'include',
			body : sp,
			headers : {
				'API-KEY' : '1d26d38d-02ca-4434-bb85-10cf30808e34'
			}
		}).then( response => response.json() );
	},
	logout(){
		return fetch(`${baseURL}/auth/login`, {
			method : 'DELETE',
			credentials : 'include',
			headers : {
				'API-KEY' : '1d26d38d-02ca-4434-bb85-10cf30808e34'
			}
		}).then( response => response.json() );
	}
}