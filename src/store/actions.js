import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST, SEARCH_A_MEDIA, SET_CATEGORIES_STORE} from '@store/actionTypes';

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