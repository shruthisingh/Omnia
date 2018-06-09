import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Login from "./containers/Login";

ReactDOM.render(
    
  <Router>
  <div>
     <Route path="/" component={Header} />
     <Route path="/" component={App} />
     <Route path="/" component={Footer}  />
     <Route path="/" component={Login}  />
  </div>
</Router>,
  
  document.getElementById("root")
);
registerServiceWorker();