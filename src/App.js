import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Library from "./components/libraries/Library";
import View from "./components/libraries/View";

import "./App.css";
import Footer from "./components/pages/Footer";
// cart
import Cart from "./components/cart/Cart";
import {CartProvider} from './components/cart/CartContext';


function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/library" component={Library} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </CartProvider> 
    </Router>
  );
}

export default App;
