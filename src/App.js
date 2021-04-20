import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from './containers/Category';
import PrivateRoute from "./components/HOC/PrivateRoute";


import { isUserLoggedIn } from "./actions/auth";

import {getInitialData} from './actions/initialData';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      dispatch(getInitialData());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products}/>
        <PrivateRoute path="/orders" component={Orders}/>
        <PrivateRoute path="/category" component={Category}/>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />

      </Switch>
    </div>
  );
}

export default App;
