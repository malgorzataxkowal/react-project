import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ShoesPage from "./shoes/ShoesPage";
import ManageShoe from "./shoes/ManageShoe";
import { ToastContainer } from "react-toastify";
import Authors from "./authors/Authors";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shoe/:id" component={ManageShoe} />
        <Route path="/shoe" component={ManageShoe} />
        <Route path="/shoes" component={ShoesPage} />
        <Route path="/authors" component={Authors} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer position="top-right" autoClose="3000" />
    </div>
  );
}

export default App;
