import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import PageNotFound from '../components/PageNotFound';
import HomePage from '../components/HomePage'
import MediaGalleryPage from './MediaGalleryPage';


export default () => {
  return (<Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/library" component={MediaGalleryPage} />

    <Route component={PageNotFound} />
  </Switch>
  )
};