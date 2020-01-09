import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import Calendar from "react-calendar";
import InputMask from "react-input-mask";
import classnames from "classnames";
import CropperModal from "../common/cropper/CropperModal";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import "./UserProfile.css";

const token = localStorage.token;
export class UserProfile extends Component {
    state = {
        fullname: "",
        email: "",
        password: "",
        dateOfBirth: "",
        image: "",
        phone: "",
        focus: false,
        errors: {}
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
    onChange = date => this.setState({ dateOfBirth: date, focus: false });

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

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("--userprofile submit--");
        const {
            fullname,
            email,
            password,
            dateOfBirth,
            passwordConfirm,
            image,
            phone
        } = this.state;
        let errors = {};
        if (fullname === "") errors.fullname = "Поле не може бути пустим!";
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
                fullname,
                email,
                password,
                dateOfBirth,
                image,
                phone
            };

            //Update model request

            axios.post("/api/update", model).then(
                resp => {
                    this.fileUpload(image);
                    console.log("----server responce----", resp);
                },
                error => {
                    console.log("----server error----", error);
                }
            );
            //Uplaod Image
        } else {
            this.setState({ errors });
        }
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

    componentDidMount() {
        console.log("token from profile", token);
        axios
            .get(
                "/api/user",
                // { Authorization: "Bearer " + token },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token //the token is a variable which holds the token
                    }
                }
            )
            .then(response => {
                //handle success
                this.setState({
                    email: response.data.email,
                    fullname: response.data.full_name,
                    password: response.data.password,
                    dateOfBirth: response.data.dateOfBirth,
                    image: response.data.image,
                    phone: response.data.phone
                });
                console.log("auth user form request", response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }

    render() {
        console.log("state", this.state);
        const {
            fullname,
            email,
            password,
            dateOfBirth,
            image,
            phone,
            errors
        } = this.state;
        let imgPath = `/images/${image}`;
        return (
            <>
                <h1 className="d-flex justify-content-center">Профіль</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <div className="w-40">
                                    <img
                                        className="rounded-circle"
                                        width="200"
                                        src={imgPath}
                                    />
                                    {/* <CropperModal
                                        label={image}
                                        getCroppedImage={this.getCroppedImage}
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <TextFieldGroup
                                    field="fullname"
                                    label="Прізвище та ім'я"
                                    value={fullname}
                                    error={errors.fullname}
                                    onChange={this.handleChange}
                                    // onBlur={this.checkUserExists}
                                />
                                <TextFieldGroup
                                    field="email"
                                    label="Електронна пошта"
                                    value={email}
                                    error={errors.email}
                                    onChange={this.handleChange}
                                    //onBlur={this.checkUserExists}
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
                                    field="dateOfBirth"
                                    label="Дата народження"
                                    value={dateOfBirth}
                                    error={errors.dateOfBirth}
                                    onChange={this.handleChange}
                                    onFocus={this.handleInputFocus}
                                />

                                {/* {focus ? (
                                    <Calendar
                                        onChange={this.onChange}
                                        value={dateOfBirth}
                                    />
                                ) : null} */}

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
                                    <button className="btn btn-primary ">
                                        Зберегти
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserProfile;
