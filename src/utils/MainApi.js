const API_KEY = 'a2cfe6c39f844f739117bb8789504d39';

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  register(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    }).then((response) => {
      return response.json();
    }).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  }


   authorize(email, password){
    return fetch(`${this.baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email })
    }).then(this._checkResponse);
  }

  getSearchResults(query) {
    return fetch(`${this.baseUrl}/everything?${new URLSearchParams({
      q: query.text,
      apiKey: API_KEY,
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      to: Date.now(),
      pageSize: 100,
    })}`, {
      method: 'GET',
    }).then(this._checkResponse);
  }

  getUserInfo(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  postArticle(token, card) {
      return fetch(`${this.baseUrl}/articles`, {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(this._checkResponse);
  }

  getArticles(token) {
      return fetch(`${this.baseUrl}/articles`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(this._checkResponse);
  }

  deleteArticle(token, articleId) {
      return fetch(`${this.baseUrl}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(this._checkResponse);
    }

}

const mainApi = new Api({
  baseUrl: 'https://api.pinterest.students.nomoreparties.site',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
