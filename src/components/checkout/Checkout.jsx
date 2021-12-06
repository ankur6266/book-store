import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
 

const Checkout = ({ isLoading, cart }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [paymentmethod, setPaymentmethod] = useState("");
  const history = useHistory();
  const [message, setMessage] = useState(null);
  
  const emptyCart = (cart) => {  
    cart.map((cart) => (
     axios.delete(`http://localhost:3001/carts/${cart.id}`)
     //console.log(cart.id)
    ))
    setTimeout(function(){
        history.push('/');
   }, 5000);//wait 5 seconds
     
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const pmethod = paymentmethod != "" ? paymentmethod : "Cash On Delivery";

    
    const order = {
      fname,
      lname,
      address,
      email,
      city,
      zipcode,
      country,
      pmethod,
    };
   
    axios.post("http://localhost:3001/orders", order).then(function (response) {
        //handle success
        setMessage(
          "Your Order Is Placed Now, Please Check Your Email For More Information."
        );

         
        emptyCart(cart);
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
//   if (cart.length < 1) history.push("/");
  if (message != null) {
    return (
      <>
        <div className="container">
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Awesome! </strong> {message}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <p>
            Check More Books
            <a href="/">start adding some</a>!
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div class="card">
            <div class="card-body m-3">
              <h2 class="card-title position-relative">Shipping Information</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="fname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        required="required"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="lname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        required="required"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        required="required"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required="required"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required="required"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="zipcode" className="form-label">
                        Zip / Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        required="required"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <label for="paymentmethod" className="form-label">
                      Payment Method
                    </label>
                    <select class="form-select" value={paymentmethod} required>
                      <option value="Cash On Delivery">Cash On Delivery</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="">
                    <a
                      href="/cart"
                      type="button"
                      className="btn btn-secondary mx-2"
                    >
                      BACK TO CART
                    </a>
                    <button type="submit" className="btn btn-warning float-end">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Checkout;
