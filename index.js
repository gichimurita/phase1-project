document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');
    const newQuoteBtn = document.querySelector('.new-quote-btn');

    newQuoteBtn.addEventListener('click', getQuote);

