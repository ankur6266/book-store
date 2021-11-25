import BookCard from "./book-card"
import BookList from "./bookList"
import './book-section.css'

function BookSection(){
    return(
        <div className="container-fluid bookSection">
            <div className="row">
                {BookList.map((book) => 
            {
                return(
                    <BookCard 
                    name = {book.name}
                    price= {book.price}
                    image= {book.image}
                    rating= {book.rating}
                    />
                )
            }        
            )
            }
            </div>
        </div>
    )
}

export default BookSection;