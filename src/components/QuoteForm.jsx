import { useState } from "react";

function QuoteForm({ addQuote }) {
    const [quoteText, setQuoteText] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        if (!quoteText || !author || !category) return;

        const newQuote = {
            quote: quoteText,
            author,
            category,
        };

        addQuote(newQuote);

        setQuoteText("");
        setAuthor("");
        setCategory("");
    };

    return (
        <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Add a new quote</h2>

            <label htmlFor="quote">Quote</label>

            <input
                type="text"
                name="quote"
                id="quote"
                placeholder="Enter quote"
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
            />

            <label htmlFor="author">Author</label>

            <input
                type="text"
                name="author"
                id="author"
                placeholder="Enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <label htmlFor="category">Category</label>

            <input
                type="text"
                name="category"
                id="category"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
}

export default QuoteForm;
