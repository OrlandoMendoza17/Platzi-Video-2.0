import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST, SEARCH_A_MEDIA, SET_CATEGORIES_STORE, FIND_VIDEO, UNSET_VIDEO} from '@store/actionTypes';

export const addMedia = (media) =>{
  return {
    type: ADD_TO_MYLIST,
    payload: media
  }
}

export const removeMedia = (media) =>{
  return {
    type: REMOVE_FROM_MYLIST,
    payload: media
  }
}

export const searchMedia = (search) =>{
  return {
    type: SEARCH_A_MEDIA,
    payload: search
  }
}

export const setCategoriesStore = (categories) =>{
  return {
    type: SET_CATEGORIES_STORE,
    payload: categories
  }
}

export const findVideo = (id) =>{
  return {
    type: FIND_VIDEO,
    payload: id
  }
}

export const unsetVideo = (id) =>{
  return {
    type: UNSET_VIDEO,
    payload: id
  }
}