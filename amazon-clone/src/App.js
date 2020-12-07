
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loginpage from './Loginpage';

function App() {
  return (
      //BEM
      <Router>
      <div className="app">
      
      <Switch>
      <Route path="/login">
           <Loginpage />
           </Route> 
           <Route path="/checkout">
           <Header />
           <Checkout />
           </Route>
          <Route path="/">
          <Header />
            <Home />
           </Route>
      </Switch>
           
        </div>
        </Router>
  );
}

export default App;
