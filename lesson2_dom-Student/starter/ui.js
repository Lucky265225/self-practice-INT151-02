import {  addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js";
// Step 1: Create an array to hold quote objects
let quotes = []

function addNewQuote(content, author){
    addQuote(content,author)
    renderQuotes()
}

// Step 2: Select the DOM element where quotes will be rendered
const quoteList = document.getElementById("quote-list")

// Step 3: Define a function called renderQuotes()
// This function should:
// - Clear the quoteList element
// - Loop through the quotes array
// - For each quote, create a <p> element with content and author
// - Append each <p> to quoteList
function renderQuotes() {
    quoteList.innerHTML = ""
    quotes = getAllQuotes()
    quotes.forEach(({content,author}) => {
        const pElement = document.createElement("p")
        pElement.textContent = `"${content}" — ${author}`
        quoteList.appendChild(pElement)
    })
}

// Step 4: Add test quotes manually and call renderQuotes()
// Example:
addNewQuote('Stay hungry, stay foolish.', 'Steve Jobs')
addNewQuote('Do or do not. There is no try.', 'Yoda')
addNewQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
renderQuotes();
