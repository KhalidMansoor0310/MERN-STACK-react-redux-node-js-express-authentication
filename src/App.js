import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
         
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";


function App() {
  
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:product_id" component={ProductDetails} />
        </Switch>
      </Router>
   
      
    </div>
  );
}

export default App;
