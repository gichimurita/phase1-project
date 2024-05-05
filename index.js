document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.querySelector('.quote-text');
    const newQuoteBtn = document.querySelector('.new-quote-btn');

    newQuoteBtn.addEventListener('click', fetchNewQuote);

    function fetchNewQuote() {
        const url = 'data.json';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const quotes = data.data;
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];
                const quoteContent = `${randomQuote.quoteText} - ${randomQuote.quoteAuthor}`;
                quoteText.textContent = quoteContent;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Initial fetch
    fetchNewQuote();
});
