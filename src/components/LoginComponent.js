import React from 'react';
import './LoginComponent.css';
const LoginComponent = () => {
    return (
        <div className={"login-form-container"}>
            <form className={"login-form"}>
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

export default LoginComponent;