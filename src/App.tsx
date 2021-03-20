import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from './store'

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}