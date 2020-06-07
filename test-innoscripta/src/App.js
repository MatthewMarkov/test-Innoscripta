import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";
import Receipt from "./Receipt/Receipt";
import {Route} from "react-router-dom";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <Footer/>
      <div className="mainContentWrapper">
          <Route path="/menu" component={Menu}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/order" component={OrderConfirmation}/>
          <Route path="/receipt" component={Receipt}/>
      </div>
    </div>
  );
}

export default App;
