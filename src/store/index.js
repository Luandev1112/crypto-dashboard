import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const initialState = {
  lastAction: { 
    type: '', 
    payload: {}
  },
  userAction: {
    showLoginModal: false,
    user: null,
  },
  // commonAction: {
  //   isLoading: false
  // },
  myPrograms : {
    isLoading: false
  }
};

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

var store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger)
);
export default store;
