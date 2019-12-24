import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import Calendar from "react-calendar";
import InputMask from "react-input-mask";
import classnames from "classnames";
import CropperModal from "../common/cropper/CropperModal";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

const token = localStorage.token;
export class UserProfile extends Component {
    state = {
        userInfo: {},
        errors: {}
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
                this.setState({ userInfo: response.data });
                console.log("auth user form request", response);
            })
            .catch(response => {
                //handle error
                console.log(response);
            });
    }
    render() {
        console.log("userInfo", this.state.userInfo);
        const { userInfo, errors } = this.state;
        let imgPath = `/images/${userInfo.image}`;
        return (
            <>
                <h1 className="d-flex justify-content-center">Profile</h1>
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
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <TextFieldGroup
                                    field="email"
                                    label="Електронна пошта"
                                    value={userInfo.email}
                                    error={errors.email}
                                    onChange={this.handleChange}
                                    // onBlur={this.checkUserExists}
                                />
                                <TextFieldGroup
                                    field="password"
                                    label="Пароль"
                                    value={userInfo.password}
                                    error={errors.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                                {/* <TextFieldGroup
                                    field="passwordConfirm"
                                    label="Підтвердження паролю"
                                    value={userInfo.passwordConfirm}
                                    error={errors.passwordConfirm}
                                    onChange={this.handleChange}
                                    type="password"
                                /> */}

                                <TextFieldGroup
                                    field="dateOfBirth"
                                    label="Дата народження"
                                    value={userInfo.dateOfBirth}
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

                                <CropperModal
                                    getCroppedImage={this.getCroppedImage}
                                />

                                <div className="form-group">
                                    <label htmlFor="phone">Телефон</label>
                                    <InputMask
                                        id="phone"
                                        name="phone"
                                        value={userInfo.phone}
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
                                    <button
                                        className="btn btn-primary "
                                        // disabled={!captchaSuccess}
                                    >
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
