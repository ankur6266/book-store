import React, { useState, useEffect,useContext,setState } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

 
const Library = () => {
  let history = useHistory();
  // products
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
     
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/product");
    setProduct(result.data.reverse());
  };

  const addToCart = async (product) => {
    const id = product.id;
    const result = await axios.get(`http://localhost:3001/cart?pid=${id}`);
    const cartItem = result.data
    
    if((cartItem.length == 0)){
      const cart = {
        "pid": product.id,
        "name": product.name,
        "price": product.price,
        "quantity": 1,
        "img": product.img
      }
      axios.post("http://localhost:3001/cart", cart);
      console.log("Adding New Item")

    }else if(cartItem.length > 0){
      const cart =  cartItem[0]
      cart.quantity+=1
      await axios.put(`http://localhost:3001/cart/${cart.id}`, cart);
      console.log("Updating Old Item", cart)
    }
    console.log(result, cartItem)
  }


  return (
    <div className="container gap-3 mb-5 py-5">
      <div className="row">
        {products.map((product) => (
          
          <div className="col-sm-3 mt-3">
            <div className="card shadow">
              <img
                src={product.img}
                className="card-img-top"
                alt="Book Image"
                width="100"
              />
              <div className="card-body">
                <p className="card-title">{product.id} - {product.name}</p>
              </div>
              <div className="card-footer text-muted">
                <button
                  className="btn btn-outline-warning"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                

                <Link
                  className="btn btn-outline-success mx-2"
                  to={"/view/" + product.id}
                >
                  View
                </Link>

                <div
                  className="fs-5"
                  style={{ float: "right", marginTop: "3px" }}
                >
                  ${product.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
