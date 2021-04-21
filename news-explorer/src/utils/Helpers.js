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

  const filteredKeywordArray =  keywordArray.filter((k,index)=>{
    return keywordArray.indexOf(k) === index;
  })

  if(filteredKeywordArray.length > 3){
    return (`${filteredKeywordArray[0]}, ${filteredKeywordArray[1]}, and ${filteredKeywordArray.length - 2} other${
      filteredKeywordArray.length - 2 !== 1 ? 's' : ''
    }`)
  } return filteredKeywordArray.join(', ')
}  