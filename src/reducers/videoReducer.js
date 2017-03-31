import initialState from './initialState';
import { SHUTTER_VIDEOS_SUCCESS, SELECTED_VIDEO } from '../constants/actionTypes';

// Handles video related actions
// The idea is to return an updated copy of the state depending on the action type.
export default function (state = initialState.videos, action) {
  switch (action.type) {
    case SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case SELECTED_VIDEO:
      return { ...state, selectedVideo: action.video };
    default:
      return state;
  }
}