import { takeLatest } from 'redux-saga/effects'
import { searchMediaSaga } from './mediaSaga'
import { SEARCH_MEDIA_REQUEST } from '../constans/actionTypes'

export default function* watachSearchMedia() {
    yield takeLatest(SEARCH_MEDIA_REQUEST, searchMediaSaga)
}