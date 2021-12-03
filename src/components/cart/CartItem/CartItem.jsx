import React from 'react';


const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
   
  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div className="card" key={item.id}>
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={item.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">{item.name}</a>
              </h5>

              <p className="card-text fs-5">Price: ₹{item.price}</p>

              <div className="d-flex gap-3" >
                <a onClick={() => handleUpdateCartQty(item, item.quantity - 1)} href="#"><span className="material-icons">remove</span></a>
                <p className="fst-normal">{item.quantity}</p>
                <a onClick={() => handleUpdateCartQty(item, item.quantity + 1)} href="#"><span className="material-icons" >add</span></a>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>REMOVE</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
