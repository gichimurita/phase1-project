document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');
    const newQuoteBtn = document.querySelector('.new-quote-btn');

    newQuoteBtn.addEventListener('click', getQuote);


    async function getQuote() {
        try {
            const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random');
            const data = await response.json();
            const quote = data.data[0];
            quoteText.textContent = `"${quote.quoteText}" - ${quote.quoteAuthor}`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = 'Failed to fetch quote. Please try again later.';
        }
    }

    // Initial Quote
    getQuote();
});