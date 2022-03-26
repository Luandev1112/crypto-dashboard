import { USERS } from "../actionTypes";

export default function userReducer(
	state = {
		user: null,
    showLoginModal: false,
	},
	action
) {
    switch (action.type) {
      case USERS.TOGGLE_LOGIN_MODAL:
        return Object.assign({}, state, { showLoginModal: action.payload.showLoginModal });

    	case USERS.LOGIN_SUCCESS:
      	return Object.assign({}, state, { user: action.payload });
      
      case USERS.LOGOUT:
      	return Object.assign({}, state, { user: null });
      
      default:
      	return state;
    }
}