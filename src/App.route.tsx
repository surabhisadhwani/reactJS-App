import React from 'react';

import {Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import PagesComponent from './app/pages/pages';

const AppRoute = (
    <Route>
        <Switch>
        <Route  path="/page">
            <PagesComponent/>
            </Route>
         <Redirect from='*' to='/page'/>
        </Switch>
        
    </Route>
);
  

export default AppRoute;
