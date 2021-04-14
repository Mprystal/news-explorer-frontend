const BASE_URL = 'https://www.newsapp.students.nomoreparties.site/api';

// save card
export const bookmarkCard = ({
  keyword,
  description: text,
  publishedAt: date,
  source,
  title,
  url: link,
  urlToImage: image,
}) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
  }).then(res => {
    res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`);
  });
};

//delete card
export const deleteBookmarkCard = cardId => {
  return fetch(`${BASE_URL}/articles/${cardId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
