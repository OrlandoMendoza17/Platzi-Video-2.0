import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST, SEARCH_A_MEDIA, SET_CATEGORIES_STORE} from '@store/actionTypes';
import {saveMyList} from '@utils/localStorage';

const reducer = (state, action) =>{
  const { myList:{ playlist }} = state;
  
  switch(action.type){
    
    case SET_CATEGORIES_STORE:
      
      state = {
        ...state,
        fakeApi: action.payload
      }
      break;
    
    case ADD_TO_MYLIST: 
      // (!playlist.includes( media => media.id === action.payload.id ))
      //   ? playlist.push(action.payload)
      //   : null
      debugger
      
      const itsNotAdded = !playlist.find( media => {
        debugger
        return media.id === action.payload.id
      }) 
      
      if(itsNotAdded){
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
    case SEARCH_A_MEDIA:
      const { categories } = state;
      const searchLowerCase = action.payload.toLowerCase()  
    
      const searchResult = categories.map(({playlist}) =>{
        debugger
        return playlist.filter(media =>{
          const titleLowerCase = media.title.toLowerCase()
          return titleLowerCase.includes(searchLowerCase)
        })
      }).flat()
      
      debugger
      
      state = {
        ...state,
        search: {
          ...state.search,
          input: !!searchLowerCase,
          playlist: !!searchLowerCase? searchResult : []
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