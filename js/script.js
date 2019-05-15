// Array with quotes. Each quote as a block.
let quotes = [
  {
  source: 'Steve Jobs',
  quote : 'I want to put a ding in the universe.'
  },
  {
  source:'Martin Luther King',
  quote :'Free at last, Free at last, Thank God almighty we are free at last.'
 },
  {
  source:'Richard Branson',
  quote : 'You do not learn to walk by following rules. You learn by doing, and by falling over.',
  year: 1993,
  citation: 'Loosing My Virginity'
  },
  {
  source:'Michael Jordan',
  quote : 'Talent wins games, but teamwork and intelligence wins championships.'
  },
  {
  source:'Arnold Schwarzenegger',
  quote : 'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.'
  },
  {
  source:'Jonathan Ive',
  quote : 'To design something really new and innovative you have to reject reason.'
  },
  {
  source:'Mikhail Gorbachev',
  quote : 'If what you have done yesterday still looks big to you, you havent done much today.'
  },
];

//2 functions. 1 to generate random quotes, the other one to print those quotes in the browser.
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
};


function printQuote(){
  let quote = getRandomQuote()
  let quoteHTML = `<p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}
  ${quote.year ? `<span class="year"> ${quote.year} </span>` : ''}
  ${quote.citation ? `<span class="citation"> ${quote.citation} </span>` : ''}
  </p>`
  document.getElementById('quote-box').innerHTML = quoteHTML;
};


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
