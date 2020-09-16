import React, { useEffect } from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './component/StateProvider/StateProvider';
import Payment from './component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51HRYkHLVyBJtXGUEldzREPwGFeCrFbQ2d90zn1xoaR26qyN8tqOFs7GizIgNEDPb0ul6iyAmiZAYTyl7xlkdiMdJ00QkYEDZqL"
)

function App() {
  const [{basket}, dispatch] = useStateValue();
  
  useEffect(() => {
    // Only run once when the app component loads ...
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;