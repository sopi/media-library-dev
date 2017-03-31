import initialState from './initialState';
import { FLICKR_IMAGES_SUCCESS, SELECTED_IMAGE } from '../constants/actionTypes';

// Handles image related actions
export default function (state = initialState.images, action) {
  switch (action.type) {
    case FLICKR_IMAGES_SUCCESS:
      return [...state, action.images];
    case SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}