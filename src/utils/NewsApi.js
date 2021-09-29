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

  getSearchResults(query) {
    return fetch(`${this.baseUrl}/everything?${new URLSearchParams({
      q: query,
      apiKey: API_KEY,
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      to: Date.now(),
      pageSize: 100,
    })}`, {
      method: 'GET',
    }).then(this._checkResponse);
  }
}

const newsApi = new Api({
  baseUrl: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default newsApi;
