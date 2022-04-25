/**
 * Entry point for the reducers that will be used in the component.
 */
import {combineReducers} from 'redux';
import getNewsBasedOnCountryCategory from './redux/getNewsBasedOnCountryCategory';
import checkNetwork from './redux/checkNetwork';
/**
 * Method contains combineReducer for combining reducers used in the components.
 * @type {Reducer<>}
 */
const AppReducer = combineReducers({
  getNewsBasedOnCountryCategory,
  checkNetwork,
});

export default AppReducer;
