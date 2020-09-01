import React from 'react';
import './App.css';
import LoginComponent from './Components/LoginComponent/';
import AddDefectComponent from './Components/AddDefectcomponent/';
import DefectListComponent from './Components/DefectListComponent/';
import { Switch, withRouter } from 'react-router-dom';
import AuthRoute from './Components/HOCComponents/AuthComponent/index';
import RegisterComponent from './Components/RegisterComponent';

const App = (props) => {
    return (
        <div className="app-container">
            <div className="app-header"><h1>DEFECT TRACKER</h1></div>
            <div className="app-body">
                <Switch>
                    <AuthRoute type="private" path='/defectlist'>
                        <DefectListComponent />
                    </AuthRoute>
                    <AuthRoute type="private" path='/adddefect'>
                        <AddDefectComponent />
                    </AuthRoute>
                    <AuthRoute type="public" path='/register' component={RegisterComponent}/>
                    <AuthRoute type="public" path='/login' component={LoginComponent} />
                    <AuthRoute type="public" path='/' component={LoginComponent} />
                </Switch>
            </div>
        </div>
    );
};
/*Need to use withRouter for react-router-dom v4
if want to access history object via props*/
export default withRouter(App);