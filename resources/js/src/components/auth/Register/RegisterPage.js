import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
import Calendar from "react-calendar";
import InputMask from "react-input-mask";
import classnames from "classnames";
import Captcha from "react-numeric-captcha";
import axios from "axios";
import "./captcha.css";
import CropperModal from "../../common/cropper/CropperModal";
import Img from "react-image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "../../common/img-loader/ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";

export class RegisterPage extends Component {
    state = {
        email: "",
        password: "",
        passwordConfirm: "",
        dateOfBirth: new Date(),
        image: "",
        phone: "",
        focus: false,
        errors: {},
        captchaSuccess: false
    };
    handleInputFocus = () => {
        this.setState({ focus: true });
    };

    getCroppedImage = img => {
        this.setState({ image: img });
    };
    handleInputBlur = () => {
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
    onChangeFile = e => {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        let file = files[0];
        this.createImage(file);
    };
    createImage = file => {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    };
    fileUpload = image => {
        const url = "api/fileupload";
        const formData = { file: image };
        return axios
            .post(url, formData)
            .then(response => console.log(response));
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
                errors.email = "Користувач з такою поштою вже зареєстрований!";
                console.log("errors from check axios", errors);
                console.log(response);
            })
            .catch(function(response) {
                //handle error
                console.log(response);
            });
        this.setState({ errors });
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
            const model = {
                email,
                password,
                dateOfBirth,
                image,
                phone
            };
            axios.post("/api/register", model).then(
                resp => {
                    console.log("----server responce----", resp);
                },
                error => {
                    console.log("----server error----", error);
                }
            );
            //Uplaod Image
            this.fileUpload(image);
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
                    />

                    {focus ? (
                        <Calendar
                            onChange={this.onChange}
                            value={dateOfBirth}
                        />
                    ) : null}
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="w-40">
                                <Img
                                    className="rounded-circle"
                                    width="100"
                                    src={image}
                                    loader={
                                        <ChangingProgressProvider
                                            values={[0, 20, 40, 60, 80, 100]}
                                        >
                                            {percentage => (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    text={`${percentage}%`}
                                                />
                                            )}
                                        </ChangingProgressProvider>
                                    }
                                    unloader={
                                        <img
                                            width="100"
                                            // src="http://denrakaev.com/wp-content/uploads/2015/03/no-image-800x511.png"
                                            src="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <CropperModal getCroppedImage={this.getCroppedImage} />

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
                    <div className="form-group  d-flex justify-content-center">
                        <Captcha
                            onChange={status =>
                                this.setState({ captchaSuccess: status })
                            }
                        />
                    </div>
                    <div className="form-group  d-flex justify-content-center">
                        <button
                            className="btn btn-primary "
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
