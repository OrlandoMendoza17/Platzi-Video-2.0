import {ADD_TO_MYLIST} from '@store/actionTypes';

const reducer = (state, action) =>{
  
  switch(action.type){
    
    case ADD_TO_MYLIST: 
      const { myList:{ playlist }} = state;
      
      // (!playlist.includes( media => media.id === action.payload.id ))
      //   ? playlist.push(action.payload)
      //   : null
      debugger
      
      const itDoes = playlist.find( media => {
        debugger
        return media.id === action.payload.id
      }) 
      
      if(!itDoes){
        playlist.push(action.payload)
      }else{
        
      }
      
      state = {
        ...state,
        myList: {
          ...state.myList,
          playlist,
        }
      }
      break;
    default: 
      state = { ...state }
      break;
  }
  return state;
}

export default reducer;