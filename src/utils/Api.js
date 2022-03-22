
const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
    }

    getPostsList(){
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    searchPosts(searchQuery){
        return fetch(`${this._baseUrl}/posts/search?query=${searchQuery}`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    setUserInfo(userData){
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
            
        }).then(onResponce)
    }

    changeLikeStatus(productId, isLike){
        return fetch(`${this._baseUrl}/posts/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
    
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYTciLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.oBewN-OonhdaNvH2FPch1PcZK3rGwdrelZA8kbbxkSk',
}

const api = new Api(config);

export default api;