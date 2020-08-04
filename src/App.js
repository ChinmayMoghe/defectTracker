import React from 'react';
import './App.css';
import LoginComponent from './Components/LoginComponent/';
import AddDefectComponent from './Components/AddDefectcomponent/';
import ViewComponent from './Components/ViewDefectComponent/';
import { Switch, Route, withRouter } from 'react-router-dom';
const App = (props) => {
    return (
        <div className="app-container">
            <div className="app-header"><h1>DEFECT TRACKER</h1></div>
            <div className="app-body">
                <Switch>
                    <Route path='/viewdefect' component={ViewComponent} />
                    <Route path='/adddefect' component={AddDefectComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/' component={LoginComponent} />
                </Switch>
            </div>
        </div>
    );
};
/*Need to use withRouter for react-router-dom v4
if want to access history object via props*/
export default withRouter(App);