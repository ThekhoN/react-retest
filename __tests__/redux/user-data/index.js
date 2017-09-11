import 'whatwg-fetch';
import {
  // action-types
  LOADING_USER_DATA,
  LOADED_USER_DATA,
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  // actions
  loadingUserData,
  // action-creators
  dispatchGetUserDataAsync,
  // initial-state
  userDataInitialState
} from '../../../src/redux/user-data';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {dummyData, TEST_URL} from '../../../src/API';
import {mockResponse} from '../../../__test-helpers__';


// actions
/*
describe('loadingUserData', () => {
  it('returns correct action', () => {
    expect(loadingUserData()).toEqual({
      type: 'LOADING_USER_DATA'
    });
  });
});
*/

// async actionCreator
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const errorGetUserDataError = 'SERVER ERROR';

describe('dispatchGetUserDataAsync', () => {
  it('returns LOADING_USER_DATA, GET_USER_DATA with data, LOADED_USER_DATA on success', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve(mockResponse(200, null, JSON.stringify(dummyData)))
    });
    const store = mockStore({userData: userDataInitialState});
    const expectedActions = [
      {type: LOADING_USER_DATA},
      {type: GET_USER_DATA, payload: dummyData},
      {type: LOADED_USER_DATA}
    ];
    return store.dispatch(dispatchGetUserDataAsync(TEST_URL))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
