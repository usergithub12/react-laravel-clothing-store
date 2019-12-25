import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavHeader extends Component {
    render() {
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
                            <Link
                                className="nav-link"
                                to="/Shop"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavHeader;
