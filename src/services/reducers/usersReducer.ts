import {
  REGISTRATION_REQUEST,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_ERROR,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  SET_USER_ERROR,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  EXIT_SUCCESS,
  EXIT_ERROR,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from "../actions/usersAction";

const initialState = {
  success: false,
  error: '',
  user: {
    email: '',
    name: ''
  },
  accessToken: '',
  refreshToken: '',
  successEmail: false,
  authorizedUser: false,
  validUser: false
};

interface IState {
  success: boolean;
  error?: string | boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
  successEmail: boolean;
  authorizedUser?: boolean;
  validUser: boolean;
}

export interface IRegistrationRequest {
  readonly type: typeof REGISTRATION_REQUEST;
}

export interface IRegistrationSuccess {
  readonly type: typeof REGISTRATION_SUCCESS;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface IRegistrationError {
  readonly type: typeof REGISTRATION_ERROR;
  error?: string;
}

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
  authorizedUser?: boolean;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface ILoginError {
  readonly type: typeof LOGIN_ERROR;
  error?: string;
}

export interface IRefreshTokenRequest {
  readonly type: typeof GET_REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccess {
  readonly type: typeof GET_REFRESH_TOKEN_SUCCESS;
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshTokenError {
  readonly type: typeof GET_REFRESH_TOKEN_ERROR;
  error?: string;
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  user: {
    email: string;
    name: string;
  };
}

export interface IGetUserError {
  readonly type: typeof GET_USER_ERROR;
  error?: string;
}

export interface ISetUserRequest {
  readonly type: typeof SET_USER_REQUEST;
}

export interface ISetUserSuccess {
  readonly type: typeof SET_USER_SUCCESS;
  user: {
    email: string;
    name: string;
  };
}

export interface ISetUserError {
  readonly type: typeof SET_USER_ERROR;
  error?: string;
}

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  successEmail: boolean;
}

export interface IForgotPasswordError {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
  error?: string;
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordError {
  readonly type: typeof RESET_PASSWORD_ERROR;
  error?: string;
}

export interface IExitSuccess {
  readonly type: typeof EXIT_SUCCESS;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface IExitError {
  readonly type: typeof EXIT_ERROR;
  error?: string;
}

export type TActionUsers = IRegistrationRequest
  | IRegistrationSuccess
  | IRegistrationError
  | ILoginRequest
  | ILoginSuccess
  | ILoginError
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenError
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserError
  | ISetUserRequest
  | ISetUserSuccess
  | ISetUserError
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordError
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordError
  | IExitSuccess
  | IExitError;

export const usersReducer = (state: IState = initialState, action: TActionUsers): IState => {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        success: true
      };

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };

    case REGISTRATION_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        success: true,
        authorizedUser: action.authorizedUser
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };

    case LOGIN_ERROR:
      return {
        ...state,
        success: false,
        error: action.error,
      };

    case GET_REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };

    case GET_REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };

    case GET_REFRESH_TOKEN_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };
      
    case GET_USER_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        authorizedUser: true
      };

    case GET_USER_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };

    case SET_USER_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };

    case SET_USER_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user
      };

    case SET_USER_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        successEmail: action.successEmail,
        validUser: true
      };

    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };

    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        success: true,
        error: false,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        successEmail: false
      };

    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      };

    case EXIT_SUCCESS:
      return {
        ...state,
        success: false,
        error: false,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      }

    case EXIT_ERROR:
      return {
        ...state,
        success: false,
        error: action.error
      }

    default:
      return state;
  }
}