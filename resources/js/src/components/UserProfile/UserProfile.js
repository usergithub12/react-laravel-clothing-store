import React, { Component } from 'react'
import TextFieldGroup from "../../common/TextFieldGroup";
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
        )
    }
}

export default UserProfile
