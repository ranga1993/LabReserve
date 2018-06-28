import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import Register from "./pages/Register";
// import Register from "./components/Register";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route
                    path="/reserve"
                    component={Reserve}
                />
                <Route
                    path="/register"
                    component={Register}
                />
            </div>
        </Router>
    );
  }
}

export default App;
