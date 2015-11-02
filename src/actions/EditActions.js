import * as types from '../constants/EditTypes';

export function deleteRow(commuteData) {
  return {
    type: types.DELETE_ROW,
    commuteData
  };
}
