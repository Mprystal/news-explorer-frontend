const apiKey = '5cbef29ac68d410bb12152d28d484b3e';
const now = new Date();
const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const BASE_URL = `https://newsapi.org/v2/everything?q=`;

export const getCards = searchRequest => {
  return fetch(
    `${BASE_URL}${searchRequest}&from=${lastWeek.toISOString()}&to=${now.toISOString()}&sortBy=popularity&pageSize=100&apiKey=${apiKey}`
  )
    .then(res => res.json())
    .then(data => {
      return data.articles;
    })
    .catch(err => console.log(err));
};
