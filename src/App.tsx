import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from './store'

import Home from './pages/Home';
import About from './pages/About';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}