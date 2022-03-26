import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// import { mapStateToProps } from './mappers';

const LogInModule = ({ navigation }) => {
    // const [state,setState] = useState({
    //     input1:'',
    //     input2:'',
    //     input3:'',
    //     input4: '',
    //     input5: '',
    //     input6: '',
    //     input7: '',
    //     input8: '',
    //     input9: '',
    //     input10: '',
    //     input11: '',
    //     input12: '',
    // });
   
    const inputField = [1,2,3,4,5,6,7,8,9,10,11,12];
    // console.log("state",state);
    

    return (
        <section className="zl_login_section">
            <div className="zl_login_content container">
                <div className="zl_login_heading_text">
                    <h3 className="zl_login_heading">Login</h3>
                    <p className="zl_login_peregraph">Lorem Ipsum is simply dummy text of the printing & industry.</p>
                </div>
                <div className="zl_login_row row">
                    {inputField.map((inputValue,i) => (
                        <div className="zl_login_col_3 col-lg-3 col-md-6" key={inputValue}>
                            <div className="zl_login_input_content position-relative">
                                <p className="zl_login_input_text">{inputValue}</p>
                                <input type="text" className="zl_login_input" name={`input${inputValue}`} placeholder="________"  />
                            </div>
                        </div>
                    ))}
                    
                    {/* <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">2</p>
                            <input type="text" className="zl_login_input" placeholder="________" value="Ipsum" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">3</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">4</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">5</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">6</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">7</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">8</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">9</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">10</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">11</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div>
                    <div className="zl_login_col_3 col-lg-3 col-md-6">
                        <div className="zl_login_input_content position-relative">
                            <p className="zl_login_input_text">12</p>
                            <input type="text" className="zl_login_input" placeholder="________" />
                        </div>
                    </div> */}
                </div>
                <div className="zl_login_btn">
                    <Link to={'/dashboard'} className="mx-auto">Login</Link>
                </div>
            </div>
        </section>
    );
}

export default connect(null, null)(LogInModule);