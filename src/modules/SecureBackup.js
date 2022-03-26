import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import HeadingModule from '../components/Layout/HeadingComponent/Heading';

// import { mapStateToProps } from './mappers';

const LogInModule = ({ navigation }) => {
    const inputField = [1,2,3,4,5,6,7,8,9,10,11,12];
    const [value, setValue] = useState('');

    return (
        <section className="zl_securebackup_page">
            <HeadingModule name={'Secure Backup'} />
            <div className="zl_SecureBackup_heading">
                <h3>recovery words</h3>
            </div>
            <div className="zl_securebackup_row row">
                {inputField.map((inputValue,i) => (
                    <div className="zl_securebackup_col_3 col-lg-3 col-md-6" key={inputValue}>
                        <div className="zl_securebackup_input_content position-relative">
                            <p className="zl_securebackup_input_text">{inputValue}</p>
                            <input type="text" className="zl_securebackup_input" name={`input${inputValue}`} placeholder="_____" defaultValue={value ? value : ""} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="zl_securebackup_btn">
                {value === "" ? <Link to={'#'} onClick={() => { setValue("Lorem") }} className="mx-auto">Show</Link>
                    : <Link to={'#'} onClick={() => { setValue("") }} className="mx-auto">Hide</Link>}
            </div>
        </section>
    );
}

export default connect(null, null)(LogInModule);