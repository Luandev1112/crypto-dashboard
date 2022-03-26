import React from "react";
import { connect } from "react-redux";
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingModule from '../components/Layout/HeadingComponent/Heading';

const AccountSupportModule = () => {
    return (
        <>
            <section className="zl_account_support_page">
                <HeadingModule name={'Account Support'} />
                <div className="zl_SecureBackup_heading">
                    <h3>How can we help you?</h3>
                </div>
                <Form className="zl_account_support_input_list">
                    <Form.Group className="zl_account_support_input_items">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Type your email address here!" />
                    </Form.Group>
                    <Form.Group className="zl_account_support_input_items">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Type your Message here" />
                    </Form.Group>
                </Form>
                <div className="zl_securebackup_btn">
                    <Link to={'#'} className="mx-auto">Send</Link>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(AccountSupportModule);
