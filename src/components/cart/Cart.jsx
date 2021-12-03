import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';


const Cart = ({ isLoading, cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  //if (isLoading) return 'Loading';
  if(isLoading){
    return (
      
      <div className="container my-5">
        
        <h5 className="row my-5">Wait Your Cart Is Getting Ready!</h5>
      </div>
      
    );
  }
  
  //if (!cart.length) return 'Loading';
  const handleEmptyCart = () => onEmptyCart();

  
 
  // if (!cart.length && "loading") return 'Loading';

  const renderCart = () => (
   <>
   {cart.map((lineItem) => (
        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
    ))}
    <div className="card my-5">
        <div className="card-header">
          Cart Items: <span className="badge bg-warning text-dark">{cart.length}</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h2>Total Amount: ₹{Object.values(cart).reduce((r, { price,quantity }) => r + (price*quantity), 0)}</h2>
            </div>
            <div className="col-6 text-end">
              {/* <button href="#" className="btn btn-danger btn-lg" onClick={handleEmptyCart}  >EMPTY</button> */}
              <button href="#" className="btn btn-primary btn-lg mx-2">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
   </>
   );

  const renderEmptyCart = () => (
    <p>You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </p>
  );

  return (
    <div className="container-fluid" style={{background: "#bfbfbf"}}>
        <h1 className="my-5">Your Shopping Cart</h1>
        { !cart.length ? renderEmptyCart() : renderCart() }
    </div>
  );
  
};

export default Cart;
