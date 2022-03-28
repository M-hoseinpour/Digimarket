import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main/Main"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Good from './Good/Good';
import Checkout from './checkout/Checkout';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react';


function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
    unsubscribe();
  }
  }, []);
  

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/product">
            <Header />
            <Good />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
