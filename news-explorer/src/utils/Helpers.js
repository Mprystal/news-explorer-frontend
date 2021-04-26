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

export function convertDate(cardDate) {
  const [year, month] = cardDate.split('-');
  const [day] = cardDate.split('-')[2].split('T');
  return `${months[month - 1]} ${day}, ${year}`;
}

export function converText(text) {
  return text
    .replace(/[<>/]/g, ' ')
    .split(' ')
    .filter(splitWord => splitWord !== 'ol' && splitWord !== 'li')
    .join(' ');
}

export function tooManyKeywords(cards){

  const keywordArray = cards.cards.map((card)=>{
    return card.keyword
  })

  const filterKeywordCopies = new Set(keywordArray);
  const filteredKeywords = [...filterKeywordCopies]
 
  if(filteredKeywords.length > 3){
    return (`${filteredKeywords[0]}, ${filteredKeywords[1]}, and ${filteredKeywords.length - 2} others`)
  } return filteredKeywords.join(', ')
}  