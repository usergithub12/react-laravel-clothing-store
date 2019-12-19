import React, { Component, Fragment } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
            isSignedUp: false
        };
    }
    checkUserExists = () => {
        const { email } = this.state;

        var bodyFormData = new FormData();
        bodyFormData.set("email", email);
        axios({
            method: "post",
            url: "/api/userexists",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(response => {
                //handle success
                this.setState({ isSignedUp: true });
                console.log(response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("--register submit--");
        const { email, password } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";
        if (password === "") errors.password = "Поле не може бути пустим!";

        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            console.log("Model is Valid");
            var bodyFormData = new FormData();
            bodyFormData.set("email", email);
            bodyFormData.set("password", password);
            axios({
                method: "post",
                url: "/api/login",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
                .then(response => {
                    // history.push("/");
                    this.setState({ isSignedUp: true });
                    console.log(response);
                })
                .catch(response => {
                    //handle error

                    console.log(response);
                });
            //ajax axios post
        } else {
            this.setState({ errors });
        }
    };

    render() {
        const { email, password, errors, isSignedUp } = this.state;
        if (isSignedUp) {
            // redirect to home if signed up
            return <Redirect to={{ pathname: "/" }} />;
        }
        return (
            <div>
                <Fragment>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="card  bg-light">
                                <div className="card-header">
                                    <h3>Вхід</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span>
                                            <i
                                                className="fa fa-facebook-official"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                        <span>
                                            <i
                                                className="fa fa-google-plus-official"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                        <span>
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <form
                                        name="form"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="input-group form-group">
                                            <TextFieldGroup
                                                field="email"
                                                label="Електронна пошта"
                                                value={email}
                                                error={errors.email}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="input-group form-group">
                                            <TextFieldGroup
                                                field="password"
                                                label="Пароль"
                                                value={password}
                                                error={errors.password}
                                                onChange={this.handleChange}
                                                type="password"
                                            />
                                        </div>
                                        <div className="row align-items-center remember">
                                            <input type="checkbox" />
                                            Запамятати мене
                                        </div>
                                        <button
                                            // type="submit"
                                            className="btn btn-primary float-right login_btn"
                                        >
                                            Увійти
                                        </button>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Не зареєстровані?
                                        <Link
                                            className="nav-link"
                                            to="/register"
                                        >
                                            Реєстрація
                                        </Link>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="">Забули пароль?</a>
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
