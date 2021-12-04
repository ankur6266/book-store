import BookCard from "../book-card";
import "../book-section.css";
import BookList from "../bookList";

const WebD = ({ products, onAddToCart }) => {

    // if (!products.length) return <p>Loading...</p>;
  return (
    <div className="container-fluid bookSection">
      <div className="row">
      {BookList.map((book) => {
    if(book.category==="Web Development"){
      return (
      <BookCard book={book}  onAddToCart={onAddToCart} />
    );
    }
  })}
      </div>
    </div>
  );
}

export default WebD;

