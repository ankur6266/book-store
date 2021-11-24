import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

function Order(props) {
  if (props.isEmpty == 0) {
    return (
      <h4 class="text-center">
        Cart Is Empty,
        <a href="/library">
          <span class="badge bg-info">Buy Now</span>
        </a>
      </h4>
    );
  } else {
    return (
      <div class="card">
        <h4 class="card-header">Place Order</h4>
        <div class="card-body">
          <h5 class="card-title">Total Item: {props.isEmpty}</h5>
          <h5 class="card-title">Total Purchase Price: $12.22</h5>
          <p class="card-text"></p>
          <button class="btn btn-warning">Proceed To Checkout</button>
        </div>
      </div>
    );
  }
}

const Cart = () => {
  // cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const result = await axios.get("http://localhost:3001/cart");
    setCart(result.data.reverse());
  };

  const removeCart = async (id) => {
    await axios.delete(`http://localhost:3001/cart/${id}`);
    loadCart();
  };

  const addItem = async (cart) => {

  }


  const removeItem = async (cart, check) => {

    const id = cart.id;
    const result = await axios.get(`http://localhost:3001/cart?id=${id}`);
    const cartItem = result.data
    
    if(cartItem.length > 0){
      const cart =  cartItem[0]
      
      if(check==="remove"){
        cart.quantity-=1
      }else if(check==="add"){
        cart.quantity+=1
      }
      


      if(cart.quantity==0){
        removeCart(cart.id)
        console.log("Remove Cart")
      }else{
        await axios.put(`http://localhost:3001/cart/${cart.id}`, cart);
        console.log("Decrease Item")
      }
      
      console.log("Cart Qty: ", cart.quantity)
    }

    
    console.log("Remove Item Function")
  }


  return (
    <div className="container">
      <h4 className="py-2">Cart Items</h4>
      {cart.map((cart) => (
        <div className="card my-2" key={cart.id}>
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src={cart.img}
                className="img-fluid rounded-start"
                alt="Product Image"
                width="50%"
              />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <h5>
                  <Link
                    className="card-title link-dark"
                    to={"/view/" + cart.id}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    {cart.name}
                  </Link>
                </h5>

                <p className="card-text ">
                  <b>Price: ${cart.price} |</b>
                  <b>
                    Quantity: 
                    <button onClick={() => removeItem(cart, "add")} className="btn">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                      {cart.quantity} 
                    <button onClick={() => removeItem(cart, "remove")} className="btn">
                    <FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                  </b>
                </p>
               
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeCart(cart.id)}
                >
                  REMOVE
                </button>
                <p className="card-text">
                  <small className="text-muted">
                    Last updated {cart.created_date}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div className="row py-2">
        <Order isEmpty={cart.length} />
      </div>
    </div>
  );
};

export default Cart;
