import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';
import MySearch from 'pages/Search';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search" >
                <MySearch />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;