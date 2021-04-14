const apiKey = '2a20258cc6f743289b5057dc10c52efe';
const now = new Date();
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const BASE_NEWS_URL = `https://newsapi.org/v2/everything?q=`;

export const getCards = searchRequest => {
  return fetch(
    `${BASE_NEWS_URL}${searchRequest}&from=${lastWeek.toISOString()}&to=${now.toISOString()}&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
  )
    .then(res => (res.ok ? res.json() : Promise.reject(`Error! ${res.status}`)))
    .then(data => {
      return data.articles;
    });
};
