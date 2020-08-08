import React from "react";
import "./App.css";
import { StoreProvider } from "easy-peasy";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/home/HomePage";
import { store } from "./model/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/about/About";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
