import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// cart
import { CartContext } from "../cart/CartContext";


const View = () => {
  // products
  const [product, setProduct] = useState([]);
  
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, [])

  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:3001/product/${id}`);
    setProduct(res.data);
  }

  //carts
  const [carts, setCarts] =   useContext(CartContext);

  const addToCart = (product) => {
    //product.preventDefault();
    setCarts(prevCarts => [...prevCarts, product])
    console.log(product);
  }





  return (
    <div className="container py-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.img}
              className="img-fluid rounded-start"
              alt="Product Image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h5 className="card-text">${product.price}</h5>
              <p className="card-text">
              {product.description}
              </p>
             
              <a onClick={() => addToCart(product)} className="btn btn-warning">Add to Cart</a>
              <a href="#" className="btn btn-outline-dark mx-2">Buy Now</a>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
