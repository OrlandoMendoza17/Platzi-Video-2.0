import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from '@store/reducer';
import {getMyList} from '@utils/localStorage';

const initialState = {
  player: {},
  search: {
    input: false,
    title: 'Busqueda',
    playlist: [],
  },
  myList: {
    title: 'Mi Lista',
    playlist: getMyList() || [],
  },
  categories:[],
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(logger)  
  )
)

export default store;