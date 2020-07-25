import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import AddDefectComponent from './components/AddDefectComponent';
import ViewComponent from './components/ViewDefectComponent';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
    return (
        <div className="app-container">
            <div className="app-header"><h1>DEFECT TRACKER</h1></div>
            <div className="app-body">
                <Switch>
                    <Route path='/viewdefect'>
                        <ViewComponent/>
                    </Route>
                    <Route path='/adddefect'>
                        <AddDefectComponent/>
                    </Route>
                    <Route path='/login'>
                        <LoginComponent/>
                    </Route>
                    <Route path='/'>
                        <LoginComponent/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;