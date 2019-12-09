import React, { Component, Fragment } from "react";

import { FormErrors } from "./FormErrors";
import "./Login.css";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: { email: "", password: "" },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    isValid() {
        if (!this.state.email) {
            errors.email = 'Заповніть поле "Емайл"';
        }

        if (!this.state.password) {
            errors.password = 'Заповніть поле "Пароль"';
        }

        this.setState({ errors });

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {} });
            console.log("isvalid", this.isValid);
        }
        // else {
        //     var data=e.response.data;
        //     this.setState({ errors: data.errors}) ;
        // }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case "email":
                emailValid = value.match(
                    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                );
                fieldValidationErrors.email = emailValid ? "" : " is invalid";
                break;
            case "password":
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid
                    ? ""
                    : " is too short";
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    render() {
        const { email, password, errors } = this.state;
        return (
            <div>
                <Fragment>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Sign In</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span>
                                            <i className="fab fa-facebook-square"></i>
                                        </span>
                                        <span>
                                            <i className="fab fa-google-plus-square"></i>
                                        </span>
                                        <span>
                                            <i className="fab fa-twitter-square"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <form>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                placeholder="username"
                                                value={email}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-key"></i>
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="password"
                                                onChange={this.onChange}
                                                value={password}
                                            />
                                        </div>
                                        <div className="row align-items-center remember">
                                            <input type="checkbox" />
                                            Remember Me
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="Login"
                                                className="btn float-right login_btn"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            value="Login"
                                            className="btn float-right login_btn"
                                            disabled={!this.state.formValid}
                                        >
                                            Sign up
                                        </button>
                                    </form>
                                    <div className="panel panel-default">
                                        <FormErrors
                                            formErrors={this.state.formErrors}
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?
                                        <a href="#">Sign Up</a>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>
        );
    }
}

export default Login;
