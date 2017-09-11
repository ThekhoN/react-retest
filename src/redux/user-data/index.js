// action-types
export const GET_USER_DATA = 'GET_USER_DATA';
export const LOADING_USER_DATA = 'LOADING_USER_DATA';
export const LOADED_USER_DATA = 'LOADED_USER_DATA';
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';

// actions
export const loadingUserData = () => ({
  type: LOADING_USER_DATA
});
export const loadedUserData = () => ({
  type: LOADED_USER_DATA
})
export const getUserData = payload => ({
  type: GET_USER_DATA,
  payload
});
export const getUserDataError = payload => ({
  type: GET_USER_DATA_ERROR,
  payload
})

// actionCreator
export const dispatchGetUserDataAsync = (url) => {
  return function (dispatch) {
    dispatch(loadingUserData());
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getUserData(json));
      // console.log('json: ', json);
      dispatch(loadedUserData());
    })
    .catch(err => dispatch(getUserDataError(err)));
  }
}

// default state
export const userDataInitialState = [];

// reducer
const userData = ( state = userDataInitialState, action ) => {
  switch ( action.type ) {
    case GET_USER_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default userData;
