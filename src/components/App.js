import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ShoesPage from "./shoes/ShoesPage";
import ManageShoe from "./shoes/ManageShoe";

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
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
