import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';


const Cart = ({ isLoading, cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  if (isLoading) return 'Loading';
  
  //if (!cart.length) return 'Loading';
  const handleEmptyCart = () => onEmptyCart();

  
 
  // if (!cart.length && "loading") return 'Loading';

  const renderCart = () => (
   <>
   {cart.map((lineItem) => (
        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
    ))}
    <div class="card my-5">
        <div class="card-header">
          Cart Items: <span class="badge bg-warning text-dark">{cart.length}</span>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h2>Total Amount: ₹{Object.values(cart).reduce((r, { price,quantity }) => r + (price*quantity), 0)}</h2>
            </div>
            <div class="col-6 text-end">
              {/* <button href="#" class="btn btn-danger btn-lg" onClick={handleEmptyCart}  >EMPTY</button> */}
              <a href="/checkout" class="btn btn-primary btn-lg mx-2">CHECKOUT</a>
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
    <div class="container">
        <h1 class="my-5">Your Shopping Cart</h1>
        { !cart.length ? renderEmptyCart() : renderCart() }
    </div>
  );
};

export default Cart;
