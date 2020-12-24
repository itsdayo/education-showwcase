import { combineReducers } from 'redux';
import {schoolReducer} from './schools'
// Combine all the reducers
const rootReducer = combineReducers({
  schoolReducer

});

export default rootReducer;
