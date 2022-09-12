import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST, SEARCH_A_MEDIA, SET_CATEGORIES_STORE, FIND_VIDEO, UNSET_VIDEO} from './actionTypes';
import {saveMyList} from '../utils/localStorage';

const reducer = (state, action) =>{
  const { myList:{ playlist }} = state;
  
  switch(action.type){
    
    case SET_CATEGORIES_STORE:    
      state = {
        ...state,
        categories: action.payload.categories
      }
      break;
    
    case ADD_TO_MYLIST:{ 
      const { myList:{ playlist }} = state;

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
    }break;
    
    case REMOVE_FROM_MYLIST:
      const { myList:{ playlist }} = state;
    
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
      
    case SEARCH_A_MEDIA:{
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
    } break;
 
    case FIND_VIDEO:{
      debugger
      
      const player = state.categories.map(({playlist}) =>{
        return playlist.filter(media => media.id === parseInt(action.payload, 10))
      }).flat()[0]
      
      console.log(player)
      
      state = {
        ...state, player
      }
    } break;
    
    case UNSET_VIDEO:{
      debugger
      state = {
        ...state,
        player: {}
      }
    } break;
      
    default: 
      state = { ...state }
      break;
  }
  return state;
}

export default reducer;