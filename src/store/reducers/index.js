import { combineReducers } from "redux";
import myProgramsReducer from './myProgramsReducer';
import userReducer from './userReducer';
//import commonReducer from './common/reducers';
//import tabReducer from './tabs/reducers';

function lastAction(state = null, action) {
  return action;
}

const reducers = combineReducers({
  lastAction: lastAction,
  userAction: userReducer,
  // commonAction: commonReducer,
  myPrograms: myProgramsReducer,
  //tabData: tabReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USERS.LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
