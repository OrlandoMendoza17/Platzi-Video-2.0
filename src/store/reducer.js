import {ADD_TO_MYLIST} from '@store/actionTypes';

const reducer = (state, action) =>{
  const { myList } = state;
  
  switch(action.type){
    case ADD_TO_MYLIST: 
      state = {
        ...state,
        myList: myList.push(action.payload)
      }
      break;
    default: 
      state = { ...state }
      break;
  }
  return state;
}

export default reducer;