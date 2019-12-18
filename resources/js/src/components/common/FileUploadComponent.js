import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FileUploadComponent = ({
    field,
    label,
    error,
    message,
    onChange,
    onFocus,
    onBlur
}) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <div className="custom-file">
                <input
                    id={field}
                    name={field}
                    type="file"
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    message={message}
                    className={classnames("form-control custom-file-input", {
                        "is-invalid": !!error
                    })}
                />
                <label className="custom-file-label" htmlFor="image">
                    {message}
                </label>
                {!!error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

FileUploadComponent.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
};

FileUploadComponent.defaultProps = {
    type: "text"
};

export default FileUploadComponent;
