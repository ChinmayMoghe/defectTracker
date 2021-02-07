import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { loginUserAction } from '../../appState/actions/authenticationActions';

const LoginComponent = ({ loginUserAction }) => {
    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.empid.value;
        const password = event.target.pass.value;
        const data = { username, password };
        loginUserAction(data);
    };
    return (
        <div className={"login-form-container"}>
            <form onSubmit={handleLogin} className={"login-form"}>
                <div className={"input-group"}>
                    <label className={"input-label"} htmlFor="empid">EMPLOYEE ID</label>
                    <input type="text" name="empid" id="empid" />
                </div>
                <div className={"input-group"}>
                    <label className={"input-label"} htmlFor="pass">PASSWORD</label>
                    <input type="password" name="pass" id="pass" />
                </div>
                <div className="input-group">
                    <button className={"btn-submit"} type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    loginUserAction
}

export default connect(null, mapDispatchToProps)(LoginComponent);