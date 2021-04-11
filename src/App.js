import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetails";
const serverError = "500";
const clientError = "404";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route
            render={() => {
              console.log(serverError + "Page not found");
              return <h1> {clientError} - Page not found</h1>;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
