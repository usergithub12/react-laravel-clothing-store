import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
        <footer>
        <div className="row bg-dark">
            <div className="col align-self-start">
                <strong>follow us:</strong>
                <ul>
                    <li><a  title="html-koder / test on Twitter" className="tw" target="_blank">Twitter</a></li>
                    <li><a  title="html-koder / test on Facebook" className="fb" target="_blank">Facebook</a></li>
                    <li><a  title="html-koder / test on Instagram" className="in" target="_blank">Instagram</a></li>
                    <li><a  title="html-koder / test on Pinterest" className="pi" target="_blank">Pinterest</a></li>
                </ul>
            </div>
            <div className="col align-self-center">
                <div className="left">
                    <span className="phone">+420 123 456 789</span>
                    <a className="mail" href="mailto:email.from@settings.com">email.from@settings.com</a>
                </div>
            </div>
            <div className="col align-self-end">
                <div className="left">
                    <nav role="navigation" aria-label="Service menu">
                    <ul>
                        <li><a >Lorem ipsum</a></li>
                        <li><a >About Us</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        </footer>
        )
    }
}

export default Footer