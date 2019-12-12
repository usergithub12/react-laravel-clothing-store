import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
    field,
    value,
    label,
    error,
    type,
    onChange,
    onFocus,
    onBlur,
    checkUserExists
}) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <input
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                value={value}
                type={type}
                id={field}
                name={field}
                className={classnames("form-control", {
                    "is-invalid": !!error
                })}
            />

            {!!error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checkUserExists: PropTypes.func,
    onBlur:PropTypes.func,
    onFocus:PropTypes.func
};

TextFieldGroup.defaultProps = {
    type: "text"
};

export default TextFieldGroup;
