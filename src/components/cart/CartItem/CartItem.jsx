import React from 'react';


const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
   
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div class="card" key={item.id}>
        <div class="row g-0">
          <div class="col-md-2">
            <img
              src={item.image}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">
                <a href="#">{item.name}</a>
              </h5>

              <p class="card-text fs-5">Price: ₹{item.price}</p>

              <div class="d-flex gap-3" >
                <a onClick={() => handleUpdateCartQty(item, item.quantity - 1)} href="#"><span class="material-icons">remove</span></a>
                <p class="fst-normal">{item.quantity}</p>
                <a onClick={() => handleUpdateCartQty(item, item.quantity + 1)} href="#"><span class="material-icons" >add</span></a>
              </div>
              <button class="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>REMOVE</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
