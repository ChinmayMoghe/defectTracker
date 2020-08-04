import React from 'react';
import './style.css';

const AddDefectComponent = () => {
    return (
        <div className="add-defect-form-container">
            <header className={"add-defect-form-header"}>
                <h2>ADD DEFECT</h2>
            </header>
            <form className="add-defect-form">
                <div className="input-group">
                    <label className={"input-label"} htmlFor="defectType">Defect Type</label>
                    <select name="defectType" id="defectType">
                        {/*TODO:Use map here to populate the list of defect types*/}
                        <option value="UI">UI</option>
                        <option value="Boundary">Boundary</option>
                        <option value="Functional">Functional</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="defect-title" className={"input-label"}>Defect Title</label>
                    <input type="text" className={"input-field-padding"} name="defect-title" id="defectTitle"/>
                </div>
                <div className="input-group">
                    <label className={"input-label"} htmlFor="defect-description">Description</label>
                    <textarea className={"textarea-input"} name="defect-description" id="defectDescription" rows="10"></textarea>
                </div>
                <div className="input-group">
                    <label className={"input-label"} htmlFor="priority-level">Priority Level</label>
                    <select name="priority-level" id="priorityLevel">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="input-group">
                    <button className={"btn-submit"} type="submit">ADD DEFECT</button>
                </div>
            </form>
        </div>
    );
};

export default AddDefectComponent;