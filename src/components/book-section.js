import BookCard from "./book-card";
import "./book-section.css";

const BookSection = ({ products, onAddToCart }) => {

    // if (!products.length) return <p>Loading...</p>;
  return (
    <div className="container-fluid bookSection">
      <div className="row">
        {products.map((book) => {
          return (
            <BookCard book={book}  onAddToCart={onAddToCart} />
          );
        })}
      </div>
    </div>
  );
}

export default BookSection;
