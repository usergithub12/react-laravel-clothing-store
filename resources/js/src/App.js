import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import Header from './Header'

import "./App.css";
import NavHeader from "./components/Header";
const HomePage = lazy(() => import("./components/Home"));
const RegisterPage = lazy(() => import("./components/auth/Register"));
const Login = lazy(() => import("./components/auth/Login"));

const ShopList = lazy(()=> import("./components/shopList"));
const SingleItem = lazy(()=> import("./components/shopList/SingleItem"));
const BasketPage = lazy(()=> import("./components/basket/BasketPage"));
const UserProfile = lazy(() => import("./components/UserProfile/UserProfile"));
// import RegisterPage from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import HomePage from "./components/Home";
import Footer from "./components/footer/footer";
const Admin = lazy(() => import("./components/auth/Admin"));
const Table = lazy(() => import("./components/auth/Table"));


class App extends Component {
    render() {
        const loadstyle = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        };
        return (
            <BrowserRouter>
                <NavHeader />
                <Suspense
                    // fallback={<div>Загрузка...</div>}
                    fallback={
                        <img
                            className="d-flex justify-content-center"
                            style={loadstyle}
                            // src="https://i2.wp.com/media.boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif?zoom=2&w=970"
                            // src="https://i.gifer.com/XOsX.gif"
                            //src="https://i.gifer.com/7VE.gif"
                            //src="https://i.gifer.com/GXK5.gif"
                            //src="https://media.giphy.com/media/dWT8DuGDdZeso9Qxz7/giphy.gif"
                            src="https://media.giphy.com/media/fWgAX8RMBmKuuNK3a9/giphy.gif"
                            />
                    }
                >
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

                        <Route exact path="/userprofile">
                            <UserProfile />
                        </Route>

                        <Route exact path="/Shop">
                            <ShopList />
                            {/* <Footer/> */}
                        </Route>
                        <Route exact path="/Item">
                            <SingleItem />
                            {/* <Footer/> */}
                        </Route>
                        <Route exact path="/userprofile">
                            <UserProfile />
                        </Route>
                        <Route exact path="/admin">
                        <Admin />
                        </Route>
                        <Route exact path="/dashboard">
                        <Table />
                        </Route>
                        <Route exact path="/basket">
                         <BasketPage />
                        </Route>
                    </div>
                </Suspense>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
