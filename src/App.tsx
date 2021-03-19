import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

export default function App(): JSX.Element {
    return (
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
    );
}