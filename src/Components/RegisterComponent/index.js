import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { registerUserAction } from '../../appState/actions/authenticationActions';

const RegisterComponent = ({ registerUserAction }) => {
    const [formValues, setFormValues] = useState({ empID: '', password: '', confirmpass: '', role: 'Developer' });
    const validateFormValues = () => {
        const empIdValidator = /^[0-9]{4}$/
        const isValidEmpId = empIdValidator.test(formValues.empID);
        const isPassconfirmed = (formValues.confirmpass === formValues.password && formValues.password !== "");
        const passwordValidator = /^[A-Za-z]\w{7,15}$/;
        const isValidPassword = isPassconfirmed ? passwordValidator.test(formValues.password) : false;
        const isFormDataValid = isValidPassword && isValidEmpId;
        return isFormDataValid;
    }
    const inputChangeHandler = (event) => {
        setFormValues({ ...formValues, [event.target.id]: event.target.value });
    };
    const registerUser = (event) => {
        event.preventDefault();
        const isFormValid = validateFormValues();
        if (isFormValid) {
            const userData = { empID: formValues.empID, password: formValues.password, role: formValues.role.toLowerCase() };
            registerUserAction(userData);
        }
    };

    return (
        <div className="register-form-container">
            <form className="register-form" onSubmit={registerUser}>
                <div className="input-group">
                    <label className={"input-label"} htmlFor="empID">EMPLOYEE ID</label>
                    <input id="empID" name="empID" type="text" onInput={inputChangeHandler} />
                </div>
                <div className="input-group">
                    <label className={"input-label"} htmlFor="role">ROLE:</label>
                    <select id="role" defaultValue={formValues.role} onInput={inputChangeHandler}>
                        <option>Tester</option>
                        <option>Developer   </option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="pass" id="password" onInput={inputChangeHandler} />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmpass">CONFIRM YOUR PASSWORD</label>
                    <input type="password" name="pass" id="confirmpass" onInput={inputChangeHandler} />
                </div>
                <div className="input-group">
                    <button className={"btn-submit"} type="submit">REGISTER</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    registerUserAction
}

export default connect(null, mapDispatchToProps)(RegisterComponent);
