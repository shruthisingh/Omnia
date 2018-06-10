import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Login from "./containers/Login";
import Dashboard from './containers/dashboard';

ReactDOM.render(
  <div>
    <Header/>
       <Router>
          <div>
            <Route path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard}  />
          </div>
      </Router>
    <Footer/>
  </div>,
  
  document.getElementById("root")
);
registerServiceWorker();