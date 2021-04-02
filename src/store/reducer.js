import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST} from '@store/actionTypes';
import {saveMyList} from '@utils/localStorage';

const reducer = (state, action) =>{
  const { myList:{ playlist }} = state;
  
  switch(action.type){
    case ADD_TO_MYLIST: 
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
      
      saveMyList(playlist)
      
      break;
    case REMOVE_FROM_MYLIST:      
      const newPlaylist = playlist.filter(media =>{
        return media.id !== action.payload.id
      })
      
      state = {
        ...state,
        myList: {
          ...state.myList, 
          playlist: newPlaylist
        }
      }
      
      saveMyList(newPlaylist)
      
      break;
    default: 
      state = { ...state }
      break;
  }
  return state;
}

export default reducer;