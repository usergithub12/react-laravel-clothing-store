import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import Header from './Header'
import RegisterPage from "./components/auth/Register";
import Login from "./components/auth/Login";
import NavHeader from "./components/Header";
import HomePage from "./components/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavHeader />

                <div className="container">
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/register">
                        <RegisterPage />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
