import React from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AllWorks from "./pages/AllWorks";
import OrderForm from "./pages/OrderForm";
import SingleProject from "./pages/SingleProject";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Confirmation from "./components/Confirmation";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/all-works" component={AllWorks} />
        <Route exact path="/order-design" component={OrderForm} />
        <Route exact path="/all-works/:slug" component={SingleProject} />
        <Route exact path="/Confirmation" component={Confirmation} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
