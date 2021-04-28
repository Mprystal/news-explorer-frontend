const BASE_URL = 'https://www.newsapp.students.nomoreparties.site/api';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`),
    )
    .then((data) => data.data);
};

export const getArticles = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const bookmarkCard = (
  { keyword, text, date, source, title, link, image },
  token,
) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      text,
      date,
      source,
      title,
      link,
      image,
    }),
  })
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`),
    )
    .then((data) => data.data);
};

export const deleteBookmarkCard = (cardId, token) => {
  return fetch(`${BASE_URL}/articles/${cardId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
