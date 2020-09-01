import React from 'react';
import './style.css';
import { data } from './mock';
import { Link } from 'react-router-dom';

const getMockTableEntries = (number) => {
    let tableData = [];
    for (let index = 0; index < number; index++) {
        tableData.push(
            <tr key={index}>
                <td>{data.defectId}</td>
                <td>{data.defectType}</td>
                <td>{data.title}</td>
                <td>{data.priority}</td>
            </tr>
        );
    }
    return tableData;
}

const DefectListComponent = () => {
    return (
        <div className={"view-defect-table-container"}>
            <div>
                <Link to='/adddefect'>Add defect</Link>
            </div>
            <div className={"defect-list-table"}>
                <table className={"view-defect-table"}>
                    <thead className={"view-defect-table-header"}>
                        <tr>
                            <th>DEFECT ID</th>
                            <th>DEFECT TYPE</th>
                            <th>TITLE</th>
                            <th>PRIORITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getMockTableEntries(60)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DefectListComponent;