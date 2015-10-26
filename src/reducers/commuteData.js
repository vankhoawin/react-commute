import data from '../data/commute_to';

let initialState = JSON.parse(data);
initialState.stats.rowTimes.map((rowTime) => {
  rowTime.x = new Date(rowTime.x);
});

export default function commuteData(state = initialState, action) {
  switch(action.type) {

  case 'IMPORT_DATA':
    return action.commuteData;

  default:
    return state;

  }
}