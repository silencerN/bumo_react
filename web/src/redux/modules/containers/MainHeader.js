import {handleActions, createAction} from "redux-actions";

const OPEN_NOTIFICATION_DROPDOWN = 'bumo/MainHeader/NotificationDropdown/open';
const CLOSE_NOTIFICATION_DROPDOWN = 'bumo/MainHeader/NotificationDropdown/close';

const OPEN_LOGIN_MODAL = 'bumo/MainHeader/LoginModal/open';
const CLOSE_MODAL = 'bumo/MainHeader/Modal/close';

const OPEN_REGISTER_MODAL = 'bumo/MainHeader/RegisterModal/open';
const OPEN_USER_IMAGE_UPLOAD_MODAL = 'bumo/MainHeader/UserImageUpload/open';

const initialState = {
  isLoginModalOpened: false,
  isRegisterModalOpened: false,
  isUserImageUploadModalOpened: false,
  userImageUploadType: 'avatar',
  notificationDropdownOpened: false,
};

export default handleActions({
  [OPEN_NOTIFICATION_DROPDOWN]: (state)=>({
    ...state,
    notificationDropdownOpened: true,
  }),
  [CLOSE_NOTIFICATION_DROPDOWN]: (state)=>({
    ...state,
    notificationDropdownOpened: false,
  }),
  [OPEN_LOGIN_MODAL]: (state)=>({
    ...state,
    isLoginModalOpened: true,
    isRegisterModalOpened: false,
    isUserImageUploadModalOpened: false,
  }),
  [CLOSE_MODAL]: (state)=>({
    ...state,
    isLoginModalOpened: false,
    isRegisterModalOpened: false,
    isUserImageUploadModalOpened: false,
  }),
  [OPEN_REGISTER_MODAL]: (state)=>({
    ...state,
    isLoginModalOpened: false,
    isRegisterModalOpened: true,
    isUserImageUploadModalOpened: false,
  }),
  [OPEN_USER_IMAGE_UPLOAD_MODAL]: (state, action)=>({
    ...state,
    isLoginModalOpened: false,
    isRegisterModalOpened: false,
    isUserImageUploadModalOpened: true,
    userImageUploadType: action.payload,
  }),
}, initialState);

export const openNotificationDropdown = createAction(OPEN_NOTIFICATION_DROPDOWN);
export const closeNotificationDropdown = createAction(CLOSE_NOTIFICATION_DROPDOWN);

export const loginModalOpen = createAction(OPEN_LOGIN_MODAL);
export const modalClose = createAction(CLOSE_MODAL);

export const registerModalOpen = createAction(OPEN_REGISTER_MODAL);
export const userImageUploadModalOpen = createAction(OPEN_USER_IMAGE_UPLOAD_MODAL);
