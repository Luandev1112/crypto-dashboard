import React from "react";
import { Link } from 'react-router-dom';

class WelcomeModule extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    className="zl_welcome_slide_step_btns"
                    type="button" onClick={this._next}>
                    Next
                </button>
            )
        }
        return null;
    }

    render() {
        return (
            <section className="zl_welcome_slide_section">
                <div className="zl_welcome_slide_content container">
                    <img src="assets/image/welcome-round-shap1.svg" alt="round-shap" className="round_shap_img_one" />
                    <img src="assets/image/welcome-round-shap2.svg" alt="round-shap" className="round_shap_img_two" />
                    <img src="assets/image/light-welcome-round-shap1.png" alt="round-shap" className="round_shap_light_img_one" />
                    <img src="assets/image/light-welcome-round-shap2.png" alt="round-shap" className="round_shap_light_img_two" />
                    <React.Fragment>
                        {/*render the form steps and pass required props in*/}
                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            email={this.state.email}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            username={this.state.username}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            password={this.state.password}
                        />
                        {/* {this.previousButton()} */}
                        <ul className="zl_welcome_slide_indicator">
                            <li className="zl_welcome_slide_indicator_items" title={this.state.currentStep}></li>
                            <li className="zl_welcome_slide_indicator_items" title={this.state.currentStep}></li>
                            <li className="zl_welcome_slide_indicator_items" title={this.state.currentStep}></li>
                        </ul>
                        <h2 className="zl_welcome_slide_heading">Welcome to crypto</h2>
                        <p className="zl_welcome_slide_peregraph">Lorem Ipsum is simply dummy text of the printing & industry.</p>
                        {this.nextButton()}
                    </React.Fragment>
                </div>
            </section>
        );
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="zl_welcome_slide_img">
            <img src="assets/image/welcome-slider1.png" alt="wizard-img" className="img-fluid zl_dark_theme_slide_img" />
            <img src="assets/image/light-welcome-slider1.png" alt="wizard-img" className="img-fluid zl_light_theme_slide_img" />
        </div>
    );
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="zl_welcome_slide_img">
            <img src="assets/image/welcome-slider2.png" alt="wizard-img" className="img-fluid zl_dark_theme_slide_img" />
            <img src="assets/image/light-welcome-slider2.png" alt="wizard-img" className="img-fluid zl_light_theme_slide_img" />
        </div>
    );
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <React.Fragment>
            <div className="zl_welcome_slide_img">
                <img src="assets/image/welcome-slider3.png" alt="wizard-img" className="img-fluid zl_dark_theme_slide_img" />
                <img src="assets/image/light-welcome-slider3.png" alt="wizard-img" className="img-fluid zl_light_theme_slide_img" />
            </div>
            <Link to={'/dashboard'} className="zl_welcome_slide_step_btns">Get Started</Link>
            <Link to={'/login'} className="zl_welcome_slide_already_wallet">I already have wallet</Link>
        </React.Fragment>
    );
}
export default WelcomeModule