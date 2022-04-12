
const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
    }

    getPostsList(page = 1, limit = 100){
        return fetch(`${this._baseUrl}/posts/paginate/?page=${page}&limit=${limit}`, {
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

    deletePost(postId){
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
    
    getPostById(postID){
        return fetch(`${this._baseUrl}/posts/${postID}`, {
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

    changeLikeStatus(postId, isLike){
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }

    createNewPost(data){
        return fetch(`${this._baseUrl}/posts`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": data.title, 
                "text": data.text,
                "image": data?.image ? data?.image : "http://dummyimage.com/400x200.png/5fa2dd/ffffff", 
                "tags": [...data?.tags]
            })
            
        }).then(onResponce)
    }

    updatePost(data, postId){
        return fetch(`${this._baseUrl}/posts/${postId}`, {
            method: "PATCH",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": data.title, 
                "text": data.text,
	            "image": data.image, 
                "tags": [data.tags]
            })
            
        }).then(onResponce)
    }
    
    addComments(data, postId){
        return fetch(`${this._baseUrl}/posts/comments/${postId}`, {
            method: "POST",
            headers: {
                authorization: this._token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                ["text"]: data.text
            })
            
        }).then(onResponce)
    }

    getComments(postId){
        return fetch(`${this._baseUrl}/posts/comments/${postId}`, {
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