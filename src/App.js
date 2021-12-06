import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header1 from "./components/header 1";
import Home from "./components/Pages/home.js";
import Login from "./components/Pages/login";
import SignUp from "./components/Pages/signup";
import Contact from "./components/Pages/contact-us";
import BookSection from "./components/book-section";
import About from "./components/Pages/about-us";
import Navbar from "./components/Navbar";
import BookList from "./components/bookList";
import Footer from "./components/footer";
import WebD from "./components/categories/webD";
import Poetry from "./components/categories/poetry";
import History from "./components/categories/history";
import Novel from "./components/categories/novel";
// cart
import axios from "axios";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isLoading, setLoading] = useState(true);


  const fetchProducts = async () => {
    const data = BookList;
    setProducts(data);
  };

  const fetchCart = async () => {
    // const result = await axios.get("http://localhost:3001/carts");
    // setCart(result.data);
    axios.get("http://localhost:3001/carts").then(response => {
      setCart(response.data);
      setLoading(false);
    });
  };

   

  const handleAddToCart = async (product, quantity) => {
    const id = product.id;
    const result = await axios.get(`http://localhost:3001/carts?pid=${id}`);
    const cartItem = result.data;
    console.log(product)
    if (cartItem.length == 0) {
      const cart = {
        pid: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      };
      axios.post("http://localhost:3001/carts", cart);
      console.log("Adding New Item");
    } else if (cartItem.length > 0) {
      const cart = cartItem[0];
      cart.quantity += 1;
      await axios.put(`http://localhost:3001/carts/${cart.id}`, cart);
      console.log("Updating Old Item", cart);
    }
    console.log(result, cartItem);
    fetchCart();  

  };

  const handleUpdateCartQty = async (product, quantity) => {
    if(quantity>0){
      const cart = {
        pid: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      }
      const response  = await axios.put(`http://localhost:3001/carts/${product.id}`, cart);
      
      setCart(response.data);
      //console.log(response.data, cart)
     fetchCart();
    }else{
      handleRemoveFromCart(product.id);
    }
   
  
    
    
   
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await axios.delete(`http://localhost:3001/carts/${lineItemId}`);
    setCart(response.data);
    setLoading(false);
    fetchCart();  
  };

  const handleEmptyCart = async () => {
    // const response = await commerce.cart.empty();
    // setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await axios.get("http://localhost:3001/carts");
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    // try {
    //   const incomingOrder = await commerce.checkout.capture(
    //     checkoutTokenId,
    //     newOrder
    //   );

    //   setOrder(incomingOrder);

    //   refreshCart();
    // } catch (error) {
    //   setErrorMessage(error.data.error.message);
    // }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

 

  return (
    <Router>
      <div>
        
        <Switch>
         <Route exact path="/login">
         <Header1 />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/signup">
        <Header1 />
        <SignUp />
        <Footer />
      </Route>
      <Route exact path="/contact">
      <Header1 />
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/about">
        <Header1 />
        <About />
        <Footer />
      </Route>
          <Route exact path="/">
          <Header1 totalItems={cart.length} />
          <Home />
            <BookSection
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
            <Footer />
          </Route>
          <Route exact path="/cart">
          {/* <Navbar totalItems={cart.length} /> */}
          <Header1 totalItems={cart.length}/>
            <Cart
             isLoading={isLoading}
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
            <Footer />
          </Route>
          <Route exact path="/webD">
          <Header1 totalItems={cart.length}/>
          <WebD products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty/>
          </Route>
          <Route exact path="/poetry">
          <Header1 totalItems={cart.length}/>
          <Poetry products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty/>
          </Route>
          <Route exact path="/history">
          <Header1 totalItems={cart.length}/>
          <History products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty/>
          </Route>
          <Route exact path="/novel">
          <Header1 totalItems={cart.length}/>
          <Novel products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty/>
          </Route>
          <Route exact path="/checkout">
          <Navbar totalItems={cart.length} />
            <Checkout
             isLoading={isLoading}
              cart={cart}
            />
          </Route>
          <Route exact path="/checkout">
          <Navbar totalItems={cart.length} />
            <Checkout
             isLoading={isLoading}
              cart={cart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
