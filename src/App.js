import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ExpenseTracker from './pages/ExpenseTracker';
import SocialNetworking from './pages/SocialNetworking';
import ECommerce from './pages/ECommerce';
import AmazonClone from './pages/AmazonClone';
import Airbnb from './pages/Airbnb';
import Car from './pages/Cars';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/Airbnb">
            <Airbnb />
          </Route>
          <Route path="/Cars">
            <Car />
          </Route>
          <Route path="/AmazonClone">
            <AmazonClone />
          </Route>
          <Route path="/eCommerce">
            <ECommerce />
          </Route>
          <Route path="/socialNetworking">
            <SocialNetworking />
          </Route>
          <Route path="/ExpenseTracker">
            <ExpenseTracker />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
