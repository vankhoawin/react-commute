import data from '../data/commute_to';
import { IMPORT_DATA } from '../actions';

const initialState = data;

export default function commuteData(state = initialState, action) {
  switch(action.type) {

  case IMPORT_DATA:
    return {
      commuteData: data
    };

  default:
    return state;

  }
}