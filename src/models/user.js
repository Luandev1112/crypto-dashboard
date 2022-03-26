import { dbHttpGet, dbHttpPost } from '../helpers/dbApi';
import { USERS } from '../store/actionTypes';

export const userActions = {

	toggleLoginModal(showLoginModal) {
		return { type: USERS.TOGGLE_LOGIN_MODAL, payload: { showLoginModal: showLoginModal }};
	},

};
