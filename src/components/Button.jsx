function Button({ onClick, isFormOpen }) {
    return (
        <div>
            <button type="button" className="button-add-quote" onClick={onClick}>
                {isFormOpen ? "Hide form" : "Click here to add quote"}
            </button>
        </div>
    );
}

export default Button;
