import React from 'react';
import './style.css';

const registerUser = (event) => {
    event.preventDefault();
};

const RegisterComponent = () => {
    return (
        <div className="register-form-container">
            <form className="register-form">
                <div className="input-group">
                    <label className={"input-label"} htmlFor="EmpId">EMPLOYEE ID</label>
                    <input id="EmpId" name="EmpId" type="text" />
                </div>
                <div className="input-group">
                    <label className={"input-label"} htmlFor="role">ROLE:</label>
                <select id="role">
                    <option>Tester</option>
                    <option>Employee</option>
                </select>
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="pass" id="password"/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirmpass">CONFIRM YOUR PASSWORD</label>
                    <input type="password" name="pass" id="confirmpass"/>
                </div>
                <div className="input-group">
                    <button className={"btn-submit"} type="submit" onClick={registerUser}>REGISTER</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterComponent;
