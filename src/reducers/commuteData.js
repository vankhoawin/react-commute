import data from '../data/commute_to';

const initialState = data;

export default function commuteData(state = initialState, action) {
  switch(action.type) {

  case 'IMPORT_DATA':
    return action.commuteData;

  default:
    return state;

  }
}