import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Characters from './pages/Characters';
import FilmDetails from './components/FilmDetails'

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
                <Route exact path='/films/:filmid'>
                    <FilmDetails />
                </Route>
                <Route exact path='/peopleid'>
                    
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;