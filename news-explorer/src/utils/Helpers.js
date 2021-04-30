const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function sameArticleKeyCheck(article, savedCard) {
  const articleKeys = [
    'keyword',
    'date',
    'image',
    'link',
    'source',
    'text',
    'title',
  ];
  return articleKeys.every((key) => article[key] === savedCard[key]);
}

export function convertDate(cardDate) {
  const [year, month] = cardDate.split('-');
  const [day] = cardDate.split('-')[2].split('T');
  return `${months[month - 1]} ${day}, ${year}`;
}

export function converText(text) {
  return text
    .replace(/[<>/]/g, ' ')
    .split(' ')
    .filter((splitWord) => splitWord !== 'ol' && splitWord !== 'li')
    .join(' ');
}

export function tooManyKeywords(cards) {
  const filteredKeywords = [
    ...new Set(cards.cards.map(({ keyword }) => keyword)),
  ];
  const [first, second] = filteredKeywords;
  const { length } = filteredKeywords;

  return length > 3
    ? `${first}, ${second}, and ${length - 2} others`
    : filteredKeywords.join(', ');
}
