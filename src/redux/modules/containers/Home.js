import {handleActions} from "redux-actions";
import _ from "lodash";
import * as PaintingActions from "../models/Painting";

const routeChange = '@@router/LOCATION_CHANGE';

const initialState = {
  pageMeta: {
    current: 0,
    next: 1,
  },
  indexes: [],
  loaded: false,
  loading: false
};

export default handleActions({
  [PaintingActions.LOAD_HOT]: (state, action) => ({
    ...state,
    loading: true
  }),
  [PaintingActions.LOAD_HOT_SUCCESS]: (state, action) => ({
    ...state,
    loaded: true,
    pageMeta: action.result,
    indexes: _.uniq([...state.indexes, ...action.normalized.result]),
    loading: false
  }),
  [PaintingActions.LOAD]: (state, action) => ({
    ...state,
    loading: true
  }),
  [PaintingActions.LOAD_SUCCESS]: (state, action) => ({
    ...state,
    loaded: true,
    loading: false,
    pageMeta: action.result,
    indexes: _.uniq([...state.indexes, ...action.normalized.result])
  }),
  [routeChange]: (state) => initialState
}, initialState);
