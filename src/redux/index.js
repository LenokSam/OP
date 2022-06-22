import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initialReducer } from './reducer';


const rootReducer = combineReducers({
  initialData: initialReducer,

  }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))