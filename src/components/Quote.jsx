function Quote({ quote, author, category }) {
    return (
        <div className="quote-box">
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">{author}</p>
            <p className="quote-category">{category}</p>
        </div>
    );
}

export default Quote;
