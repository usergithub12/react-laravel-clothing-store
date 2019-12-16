import React, { Component, Fragment } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import axios from "axios";
import { Link } from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    checkUserExists = () => {
        const { email } = this.state;
        // axios
        //     .post("/api/userexists", {
        //         email: email
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
        var bodyFormData = new FormData();
        bodyFormData.set("email", email);
        axios({
            method: "post",
            url: "/api/userexists",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function(response) {
                //handle success
                console.log(response);
            })
            .catch(function(response) {
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
            //ajax axios post
        } else {
            this.setState({ errors });
        }
    };

    render() {
        const { email, password, errors } = this.state;
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
