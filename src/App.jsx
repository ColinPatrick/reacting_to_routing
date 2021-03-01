import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Characters from './pages/Characters';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/films'>
                    <Films />
                </Route>
                <Route exact path='/characters'>
                    <Characters />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;