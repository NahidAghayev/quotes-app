import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Quote from "../components/Quote.jsx";
import Button from "../components/Button.jsx";
import QuoteForm from "../components/QuoteForm.jsx";
import { quotes as initialQuotes } from "../data/quotes.js";
import { useState } from "react";

function App() {
    const [quotes, setQuotes] = useState(initialQuotes);
    const [showForm, setShowForm] = useState(false);

    const addQuote = (newQuote) => {
        setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
        setShowForm(false);
    };

    return (
        <div>
            <Header />
            <main>
                {quotes.map((q, index) => (
                    <Quote
                        key={index}
                        quote={q.quote}
                        author={q.author}
                        category={q.category}
                    />
                ))}
            </main>
            <Button onClick={() => setShowForm((a) => !a)} isFormOpen={showForm} />
            {showForm && <QuoteForm addQuote={addQuote} />}
            <Footer />
        </div>
    );
}

export default App;
