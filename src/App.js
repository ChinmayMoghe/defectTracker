import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import AddDefectComponent from './components/AddDefectComponent';
import ViewComponent from './components/ViewDefectComponent';
const App = () => {
    return (
        <div className="app-container">
            <div className="app-header"><h1>DEFECT TRACKER</h1></div>
            <div className="app-body">
                <LoginComponent />
                {/* <AddDefectComponent /> */}
                {/* <ViewComponent></ViewComponent> */}
            </div>
        </div>
    );
};

export default App;