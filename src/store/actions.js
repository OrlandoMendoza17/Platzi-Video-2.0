import {ADD_TO_MYLIST} from '@store/actionTypes';

export const addMedia = (media) =>{
  return {
    type: ADD_TO_MYLIST,
    payload: media
  }
}