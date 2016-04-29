import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import ContentIndex from './components/content_index';
import ApptsNew from './components/appts_new'
import About from './components/about';
import Contact from './components/contact';

export default (
  <Route path='/' component={App} >
    <IndexRoute component={ContentIndex} />
    <Route path='book-online' component={ApptsNew} />
    <Route path='about-us' component={About} />
    <Route path='contact' component={Contact} />
  </Route>
);
