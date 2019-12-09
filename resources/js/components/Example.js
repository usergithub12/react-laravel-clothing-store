import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Login from "./Login.js";
import Registration from "./Registration";

export default class Example extends Component {
    render() {
        return (
            <Fragment>
                <h1>laravel-react</h1>;
                <Login />
                <Registration />
            </Fragment>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
