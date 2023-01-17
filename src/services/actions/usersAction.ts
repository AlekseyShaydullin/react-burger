import { loginApi,
  registerApi,
  refreshTokenApi,
  getUserApi,
  updateUserApi,
  logoutApi,
  setEmailApi,
  setResetPassApi,
} from "../../utils/api";
import { setCookie } from "../../utils/cookie";
import { TLoginApi, TRegisterApi, TSetResetPassApi } from "../../utils/types/data";
import { AppDispatch } from "../../utils/types/main";

export const REGISTRATION_REQUEST: 'REGISTRATION_REQUEST' = 'REGISTRATION_REQUEST';
export const REGISTRATION_ERROR: 'REGISTRATION_ERROR' = 'REGISTRATION_ERROR';
export const REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS' = 'REGISTRATION_SUCCESS';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_ERROR: 'GET_USER_ERROR' = 'GET_USER_ERROR';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';

export const SET_USER_REQUEST: 'SET_USER_REQUEST' = 'SET_USER_REQUEST';
export const SET_USER_ERROR: 'SET_USER_ERROR' = 'SET_USER_ERROR';
export const SET_USER_SUCCESS: 'SET_USER_SUCCESS' = 'SET_USER_SUCCESS';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';

export const GET_REFRESH_TOKEN_REQUEST: 'GET_REFRESH_TOKEN_REQUEST' = 'GET_REFRESH_TOKEN_REQUEST';
export const GET_REFRESH_TOKEN_ERROR: 'GET_REFRESH_TOKEN_ERROR' = 'GET_REFRESH_TOKEN_ERROR';
export const GET_REFRESH_TOKEN_SUCCESS: 'GET_REFRESH_TOKEN_SUCCESS' = 'GET_REFRESH_TOKEN_SUCCESS';

export const EXIT_SUCCESS: 'EXIT_SUCCESS' = 'EXIT_SUCCESS';
export const EXIT_ERROR: 'EXIT_ERROR' = 'EXIT_ERROR';

export function register({email, password, name}: TRegisterApi) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: REGISTRATION_REQUEST,
    });
    registerApi({email, password, name})
      .then((res) => {
        if(res && res.success) {
          setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
          localStorage.setItem('refreshToken', res.refreshToken);
          dispatch({
            type: REGISTRATION_SUCCESS,
            user: res.user,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          });
        } else {
          dispatch({
            type: REGISTRATION_ERROR,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTRATION_ERROR,
          error: err.message,
        })
      });
  }
}

export function login({email, password}: TLoginApi) {
  return function(dispatch: AppDispatch) {
    dispatch({  
      type: LOGIN_REQUEST
    });
    loginApi({email, password})
      .then((res) => {
        if(res && res.success) {
          if(!localStorage.length){
            setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({
              type: LOGIN_SUCCESS,
              user: res.user,
              accessToken: res.accessToken,
              refreshToken: res.refreshToken
            });
          }
        } else {
          dispatch({
            type: LOGIN_ERROR
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ERROR,
          error: err.message
        })
      });
  }
}

export function getUser() {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST
    });
    getUserApi()
      .then((res) => {
        if(res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({
            type: GET_USER_ERROR
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_ERROR,
          error: err.message
        })
      });
  }
}

export function updateUser({email, password, name}: TRegisterApi) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: SET_USER_REQUEST
    });
    updateUserApi({email, password, name})
      .then((res) => {
        if(res && res.success) {
          dispatch({
            type: SET_USER_SUCCESS,
            user: res.user
          });
        } else {
          dispatch({
            type: SET_USER_ERROR
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_USER_ERROR,
          error: err.message
        })
      });
  }
}

export function resetPassword({password, token}: TSetResetPassApi) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    setResetPassApi({password, token})
      .then((res) => {
        if(res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_ERROR
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_ERROR,
          error: err.message
        })
      });
  }
}

export function forgotPassword(email: string) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    });
    setEmailApi(email)
      .then((res) => {
        if(res && res.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            successEmail: true
          });
        } else {
          dispatch({
            type: FORGOT_PASSWORD_ERROR
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_ERROR,
          error: err.message
        })
      });
  }
}

export function refreshToken() {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_REFRESH_TOKEN_REQUEST
    });
    refreshTokenApi()
      .then((res) => {
        if(res && res.success) {
          setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
          localStorage.setItem('refreshToken', res.refreshToken);
          dispatch({
            type: GET_REFRESH_TOKEN_SUCCESS,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
          });
        } else {
          dispatch({
            type: GET_REFRESH_TOKEN_ERROR
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_REFRESH_TOKEN_ERROR,
          error: err.message
        })
      });
  }
}

export function logout() {
  return function(dispatch: AppDispatch) {
    logoutApi()
      .then((res) => {
        if(res && res.success) {
          setCookie('accessToken', '');
          localStorage.removeItem('refreshToken');
          dispatch({
            type: EXIT_SUCCESS,
            user: {
              email: '',
              name: '',
            },
            accessToken: '',
            refreshToken: '',
          })
        }
      })
      .catch((err) => {
        dispatch({
          type: EXIT_ERROR,
          error: err.message
        })
      });
  }
}