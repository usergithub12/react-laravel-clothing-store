import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import Calendar from "react-calendar";
import InputMask from "react-input-mask";
import classnames from "classnames";
import Captcha from "react-numeric-captcha";
import axios from "axios";
import "./captcha.css";

export class RegisterPage extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
        dateOfBirth: new Date(),
        image: "",
        phone: "",
        focus: false,
        errors: {
            //email: 'Invalid'
        },
        captchaSuccess: false
    };
    handleInputFocus = () => {
        console.log("qwe");
        this.setState({ focus: true });
    };

    handleInputBlur = () => {
        console.log("qwe");
        this.setState({ focus: false });
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
    onChangeFile = event => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0])
        });
    };

    checkUserExists = e => {
        const { email } = this.state;

        let errors = {};

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

                errors.email = "Користувач з такою поштою вже зараєстрований!";
                console.log("errors from check axios", errors);
                console.log(response);
            })
            .catch(function(response) {
                //handle error

                console.log(response);
            });
        // const isValid = Object.keys(errors).length === 0;
        console.log("errors after axios", errors);
        this.setState({ errors });
        // setStateByErrors(email, email);
        console.log("errors STATE", this.state);
    };

    onChange = date => this.setState({ dateOfBirth: date, focus: false });

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("--register submit--");
        const {
            email,
            password,
            dateOfBirth,
            passwordConfirm,
            image,
            phone
        } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";
        if (password === "") errors.password = "Поле не може бути пустим!";
        if (passwordConfirm === "")
            errors.passwordConfirm = "Поле не може бути пустим!";
        if (password != passwordConfirm)
            errors.passwordConfirm = "Паролі не співпадають!";
        if (dateOfBirth === "") errors.dateOfBirth = "Оберіть дату!";
        if (image === "") errors.image = "Фото не обрано!";
        if (phone === "") errors.phone = "Поле не може бути пустим!";
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            console.log("Model is Valid");
            //ajax axios post
            var bodyFormData = new FormData();
            bodyFormData.set("name", email);
            bodyFormData.set("email", email);
            bodyFormData.set("password", password);
            axios({
                method: "post",
                url: "/api/register",
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
        } else {
            this.setState({ errors });
        }
    };

    render() {
        const {
            email,
            password,
            dateOfBirth,
            passwordConfirm,
            image,
            phone,
            errors,
            focus,
            captchaSuccess
        } = this.state;
        console.log("Regiter page state", this.state);
        console.log("focus", focus);
        return (
            <>
                <h1 className="d-flex justify-content-center">Реєстрація</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        error={errors.email}
                        onChange={this.handleChange}
                        onBlur={this.checkUserExists}
                    />
                    <TextFieldGroup
                        field="password"
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                    <TextFieldGroup
                        field="passwordConfirm"
                        label="Підтвердження паролю"
                        value={passwordConfirm}
                        error={errors.passwordConfirm}
                        onChange={this.handleChange}
                        type="password"
                    />

                    <TextFieldGroup
                        field="dateOfBirth"
                        label="Дата народження"
                        value={dateOfBirth.toLocaleDateString()}
                        error={errors.dateOfBirth}
                        onChange={this.handleChange}
                        onFocus={this.handleInputFocus}
                        //  onBlur={this.handleInputBlur}
                    />

                    {focus ? (
                        <Calendar
                            onChange={this.onChange}
                            value={dateOfBirth}
                        />
                    ) : null}
                    {/* {!!focus && (<Calendar  onChange={this.onChange} value={dateOfBirth} /> )} */}

                    {/* <TextFieldGroup
                        field="Image"
                        label="Фото"
                        value={image}
                        error={errors.image}
                        onChange={this.onChangeFile}
                        type="file"
                    /> */}
                    <div className="form-group">
                        <label htmlFor="image">Фото</label>
                        <div className="custom-file">
                            <input
                                name="image"
                                id="image"
                                type="file"
                                onChange={this.onChangeFile}
                                className={classnames(
                                    "form-control custom-file-input",
                                    {
                                        "is-invalid": !!errors.image
                                    }
                                )}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="image"
                            >
                                Оберіть фото
                            </label>
                            {!!errors.image && (
                                <div className="invalid-feedback">
                                    {errors.image}
                                </div>
                            )}
                        </div>

                        <img id="prev" src={image} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <InputMask
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                            mask="+38 (099) 999-99-99"
                            maskChar=" "
                            className={classnames("form-control", {
                                "is-invalid": !!errors.phone
                            })}
                        />
                        {!!errors.phone && (
                            <div className="invalid-feedback">
                                {errors.phone}
                            </div>
                        )}
                    </div>

                    <Captcha
                        onChange={status =>
                            this.setState({ captchaSuccess: status })
                        }
                    />
                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            disabled={!captchaSuccess}
                        >
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </>
        );
    }
}

export default RegisterPage;
