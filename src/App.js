import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"
import SignInPage from "./pages/SignInPage/SignInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CartPage from "./pages/CartPage/CartPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/products/:id" component={DetailPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
