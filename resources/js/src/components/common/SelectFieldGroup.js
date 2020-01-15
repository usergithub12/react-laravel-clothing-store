import React, { Component } from "react";

export class SelectFieldGroup extends Component {
    constructor(props) {
        super(props);
    }
    handleChange = event => {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    };
    render() {
        let fieldname = this.props.fieldname;
        let selected = this.props.selected;
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map(data => (
            <option key={data.id} value={data.id}>
                {data.name}
            </option>
        ));

        return (
            <div className="form-group">
                <label>{selected}</label>
                <select
                    id={fieldname}
                    name={fieldname}
                    className="form-control"
                    onChange={this.handleChange}
                >
                    <option>Виберіть {selected}</option>
                    {options}
                </select>
            </div>
        );
    }
}

export default SelectFieldGroup;
