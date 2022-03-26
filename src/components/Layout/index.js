import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import getAccountInfoAction from '../../store/actions/authorization/info';

import Connector from './Connector';

const mapStoreToProps = ({ userAction }) => ({
    user: userAction.user,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAccountData: () => dispatch(getAccountInfoAction()),
//   };
// };

export default withRouter(connect(mapStoreToProps)(Connector));
