import './book-card.css'


const BookCard = ({ book, onAddToCart }) => {
    const handleAddToCart = () => onAddToCart(book, 1);

    return(
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 bookCard">
            <div class="in-card">
            <h6>{book.name}</h6>
            <img className="cardImage" src = {book.image} alt="book"/>
            <h6>Price: ₹ {book.price}</h6>
                <div className="rating">
                    {Array(Math.floor(book.rating))
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                            ))}
                </div>
            
                <button className="btn">Buy Now/ Rent</button>
                {/* <button className="btn" onClick={handleAddToCart} disabled="true">
                    Add To Cart <div class="spinner-border spinner-border-sm" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </button> */}
                <button className="btn" onClick={handleAddToCart} >
                    Add To Cart  
                </button>
            
            </div>
        </div>
    )
}

export default BookCard;