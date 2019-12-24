import React, { Component } from 'react'
import TextFieldGroup from "../common/TextFieldGroup";
import Calendar from "react-calendar";
import InputMask from "react-input-mask";
import classnames from "classnames";
import CropperModal from "../common/cropper/CropperModal";
import "react-circular-progressbar/dist/styles.css";
export class UserProfile extends Component {

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
        return (
            
            <>
                <h1 className="d-flex justify-content-center">Profile</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                        <div className="d-flex justify-content-center">
                            <div className="w-40">
                            <img  className="rounded" width="200" src="https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"/>
                            </div>
                        </div>
                        </div>
                        <div className="col">
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
                        <button
                            className="btn btn-primary "
                            disabled={!captchaSuccess}
                        >
                            Зареєструватися
                        </button>
                    </div>
                </form>
                        </div>
                    </div>
                       
                </div>

             
            </>
        )
    }
}

export default UserProfile
