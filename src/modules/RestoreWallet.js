import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import HeadingModule from '../components/Layout/HeadingComponent/Heading';

const RestoreWalletModule = () => {
    const inputField = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <>
            <section className="zl_restore_wallet_page">
                <HeadingModule name={'Restore Wallet'} />
                <div className="zl_restore_wallet_input_content">
                    <div className="zl_securebackup_row row">
                        {inputField.map((inputValue, i) => (
                            <div className="zl_securebackup_col_3 col-lg-3 col-md-6" key={i}>
                                <div className="zl_securebackup_input_content position-relative">
                                    <p className="zl_securebackup_input_text">{inputValue}</p>
                                    <input type="text" className="zl_securebackup_input" name={`input${inputValue}`} placeholder="________" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="zl_securebackup_btn">
                        <Link to={'#'} className="mx-auto">Restore</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(RestoreWalletModule);
