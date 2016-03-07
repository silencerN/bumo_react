import {handleActions} from 'redux-actions';

import * as PaintingActions from '../models/Painting';

export const GoNextPage = 'bumo/Home/GoNextPage';

export default handleActions({
  [PaintingActions.LOAD]: (state, action) => ({
    ...state,
    loading: true
  }),
  [PaintingActions.LOAD_SUCCESS]: (state, action) => ({
    ...state,
    loaded: true,
    loading: false,
    pageMeta: action.result,
    indexes: [...state.indexes, ...action.normalized.result]
  }),
  [GoNextPage]: (state, action) =>({
    ...state,
    page: state.page + 1,
  })
}, {
  page: 1,
  indexes: [],
  loaded: false,
  loading: false
});