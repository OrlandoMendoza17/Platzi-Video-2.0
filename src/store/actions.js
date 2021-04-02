import {ADD_TO_MYLIST, REMOVE_FROM_MYLIST} from '@store/actionTypes';

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