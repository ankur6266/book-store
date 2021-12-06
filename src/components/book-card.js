import { Link } from 'react-router-dom';
import './book-card.css'


function BookCard({ book, onAddToCart }){
    const handleAddToCart = () => onAddToCart(book, 1);
    
    return(
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 bookCard">
            <div className="in-card">
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
            
                <Link to='/OnBuy' target="_blank" className="btn">Buy Now</Link>
                {/* <button className="btn" onClick={handleAddToCart} disabled="true">
                    Add To Cart <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
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