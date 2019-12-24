import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import setAuthorizationToken from "../../utils/setAuthorizationToken";

export class NavHeader extends Component {
    // state = {
    //     isSignedUp: false
    // };

    logout = () => {
        console.log("logout");
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        this.setState({ isSignedUp: true });
        // return <Redirect to={{ pathname: "/login" }} />;
    };

    render() {
        // const { isSignedUp } = this.state;
        // console.log(this.state);
        // if (isSignedUp) {
        //     // redirect to home if signed up
        //     return <Redirect to={{ pathname: "/login" }} />;
        // }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark transparent">
                <Link className="navbar-brand" to="/">
                    Cloth Store
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end order-2"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Головна{" "}
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Реєстрація
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Вхід
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link
                                className="nav-link disabled"
                                to="/register"
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                Disabled
                            </Link> */}
                            <Link
                                to="/login"
                                className="nav-link"
                                onClick={this.logout}
                            >
                                Вихід
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userprofile">
                                Профіль
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavHeader;
