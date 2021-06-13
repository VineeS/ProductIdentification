import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, AddProduct, TransferProduct, ProductHistory } from "./components";

const App = () => {
  return (
    <div>
    <div className = "main">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/AddProduct" exact component={() => <AddProduct />} />
          <Route path="/ProductHistory" exact component={() => <ProductHistory />} />
        <Route path="/TransferProduct" exact component={() => <TransferProduct />} />
        </Switch>
      </Router>
    </div>

    
    </div>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
