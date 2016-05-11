import {handleActions} from 'redux-actions';
export const UPDATE = 'bumo/me/UPDATE';
export const UPDATE_SUCCESS = 'bumo/me/UPDATE_SUCESS';
export const UPDATE_FAIL = 'bumo/me/UPDATE_FAIL';

export const UPLOAD_AVATAR = 'bumo/me/UPLOAD_AVATAR';
export const UPLOAD_AVATAR_SUCCESS = 'bumo/me/UPLOAD_AVATAR_SUCCESS';
export const UPLOAD_AVATAR_FAIL = 'bumo/me/UPLOAD_AVATAR_FAIL';

export const UPLOAD_BANNER = 'bumo/me/UPLOAD_BANNER';
export const UPLOAD_BANNER_SUCCESS = 'bumo/me/UPLOAD_BANNER_SUCCESS';
export const UPLOAD_BANNER_FAIL = 'bumo/me/UPLOAD_BANNER_FAIL';
export default handleActions({
  [UPDATE]: (state) => state,
  [UPDATE_SUCCESS]: (state, action) => ({
    ...action.result
  }),
  [UPDATE_FAIL]: (state, action) => ({
    error: action.error
  }),
  [UPLOAD_AVATAR]: (state) => (
  {
    avatar_uploading: true,
    avatar_success: false
  }
  ),
  [UPLOAD_AVATAR_SUCCESS]: (state)=>(
  {
    avatar_uploading: false,
    avatar_success: true
  }
  ),
  [UPLOAD_BANNER]: (state) => (
  {
    banner_uploading: true,
    banner_success: false
  }
  ),
  [UPLOAD_BANNER_SUCCESS]: (state)=>(
  {
    banner_uploading: false,
    banner_success: true
  }
  ),
  ['@@router/LOCATION_CHANGE']: ()=>({
    avatar_uploading: false,
    banner_uploading: false
  })
}, {
  avatar_uploading: false,
  banner_uploading: false
});
export function update(profile) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    promise: (client) => client.put('/api/me', {
      data: profile
    })
  };
}

export function uploadAvatar(files) {
  return {
    types: [UPLOAD_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAIL],
    promise: (client) => client.put('/api/my/profile-upload?type=0&aaa=bbb&ccc=ddd', {
      data: files
    })
  };
}
export function uploadBanner(files) {
  return {
    types: [UPLOAD_BANNER, UPLOAD_BANNER_SUCCESS, UPLOAD_BANNER_FAIL],
    promise: (client) => client.put('/api/my/profile-upload?type=1&aaa=bbb&ccc=ddd', {
      data: files
    })
  };
}
