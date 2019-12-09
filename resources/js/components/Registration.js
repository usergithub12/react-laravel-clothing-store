import React, { Component } from "react";

import "./Registration.css";

export class Registration extends Component {
    render() {
        return (
            <div>
                <div class="container register-form">
                    <div class="form">
                        <div class="form-content">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your Name *"
                                            value=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Phone Number *"
                                            value=""
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your Password *"
                                            value=""
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Confirm Password *"
                                            value=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btnSubmit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
