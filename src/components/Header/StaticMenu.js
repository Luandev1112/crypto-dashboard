import React from 'react';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

// import { routes } from '../../shared/constants';
import { userActions } from '../../models/user';
import LoginModal from '../Modals/Login/LoginModal';

const texts = {
  login: 'Login',
  signup: 'Sign up'
};

const StaticMenu = (props) => {
  const { showLoginModal, toggleLoginModal } = props;
  // const [ showLogin, setShowLogin ] = useState(false);

  return (
      <div>
      <Nav className="justify-content-end">
        <Nav>
          <Button variant="link" onClick={() => toggleLoginModal(true)}>{texts.login}</Button>
        </Nav>
      </Nav>
      <LoginModal show={showLoginModal} toggleLoginModal={toggleLoginModal} />
      </div>
  );
};

const mapStateToProps = (state) => {
    return {
        showLoginModal: state.userAction.showLoginModal,
    }
};

const mapDispatchToProps = {
  toggleLoginModal: userActions.toggleLoginModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(StaticMenu);
