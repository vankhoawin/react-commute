import * as types from '../constants/ImportTypes';

export function importData(commuteData) {
  return {
    type: types.IMPORT_DATA,
    commuteData
  };
}