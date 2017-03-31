import { fork } from 'redux-saga/effects'
import watcherSearchMedia from './watcher'

export default function* startForman() {
    yield fork(watcherSearchMedia);
}