import React from 'react';
import {HashRouter,  Route, Switch } from 'react-router-dom';
import PageCaracthers from '../pages/PageCaracthers';
import PageComics from '../pages/PageComics';
import PageDetails from '../pages/PageDetails';
import PageHome from '../pages/PageHome';
import PageFavorites from '../pages/PageFavorites';
import PageLogin from '../pages/PageLogin.jsx';

function Content() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={PageHome} />
        <Route path='/caracters' component={PageCaracthers} />
        <Route path='/comics' component={PageComics} />
        <Route path='/favorites' component={PageFavorites} />
        <Route path='/details/:id' component={PageDetails} />
        <Route path='/login' component={PageLogin} />
      </Switch>
    </main>
  );
}

export default Content;

// formik formulario
