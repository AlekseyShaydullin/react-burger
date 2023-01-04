import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsAction } from './actions/wsAction';

export const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware(wsAction)
      )));