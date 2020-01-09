import React from "react";

import PropTypes from "prop-types";

const FilterFieldGroup = ({ field, value, label, onChange }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                className="form-check-input"
            />
            <label htmlFor={field}>{label}</label>
        </div>
    );
};

FilterFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

FilterFieldGroup.defaultProps = {
    type: "checkbox"
};

export default FilterFieldGroup;
