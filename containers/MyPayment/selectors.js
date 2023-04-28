import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('my-payment', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

export { selectHome, makeSelectUsername };
