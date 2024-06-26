console.log("JavaScript file loaded");


const baseUrl = "https://quote-garden.onrender.com/api/v3/quotes";

async function getQuote(category = null) {
    try {
        let url = baseUrl;
        if (category) {
            url += `?category=${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const randomQuote = data.data[randomIndex].quoteText;
        document.querySelector('.quote-text').innerHTML = randomQuote;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getQuote(); 
});

document.querySelector('.new-quote-btn').addEventListener('click', function() {
    getQuote(); 
});

document.querySelector('#quote-category').addEventListener('change', function() {
    const selectedCategory = this.value;
    getQuote(selectedCategory); 
});

// To copy the quote text to the clipboard
function copyQuote() {
    const quoteText = document.querySelector('.quote-text').textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch((err) => {
        console.error('Failed to copy quote: ', err);
    });
}

// To mark the quote as a favorite
function markAsFavorite() {
    alert('Quote marked as favorite!');
}

document.querySelector('.copy-quote-btn').addEventListener('click', copyQuote); 

document.querySelector('.favorite-btn').addEventListener('click', markAsFavorite);
