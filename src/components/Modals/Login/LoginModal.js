import React, { Component } from "react";
import { connect } from "react-redux";
import autoBind from "react-autobind";

import { Modal, Button } from 'react-bootstrap';

import { mapStateToProps } from './mappers';

class LoginModal extends Component {

	constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
        	showLoginModal: this.props.show,
        }
    }

    static getDerivedStateFromProps(props, state) {
	    return {showLoginModal: props.show };
	}

  	ModalClose = () => {
  		this.props.toggleLoginModal(false);
  	};

    render() {
        return (
            <Modal show={this.state.showLoginModal} onHide={this.ModalClose}>
		        <Modal.Header closeButton>
		          <Modal.Title>Modal heading</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	Content is here.
		        </Modal.Body>
		        <Modal.Footer>
		          <Button variant="secondary" onClick={this.ModalClose}>
		            Close
		          </Button>
		          <Button variant="primary" onClick={this.ModalClose}>
		            Save Changes
		          </Button>
		        </Modal.Footer>
		    </Modal>
        );
    }
}

export default connect(mapStateToProps, null)(LoginModal);
