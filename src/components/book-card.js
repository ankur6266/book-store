import './book-card.css'
import BookList from './bookList';
function BookCard(props){
    return(
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 bookCard">
            <div class="in-card">
            <h6>{props.name}</h6>
            <img className="cardImage" src = {props.image} alt="book"/>
            <h6>Price: ₹ {props.price}</h6>
                <div className="rating">
                    {Array(Math.floor(props.rating))
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                            ))}
                </div>
            </div>
        </div>
    )
}

export default BookCard;