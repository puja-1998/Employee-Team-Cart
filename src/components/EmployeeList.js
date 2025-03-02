// EmployeeList.js

import React from "react";

const EmployeeList = ({ employees, dispatch }) => {
  return (
    <div className="employee-list">
      <h2>Employee's List</h2>
      {employees.map((employee) => (
        <div key={employee.id}>
          <span className={employee.added ? "grey-text" : "black-text"}>
            {employee.first_name} {employee.last_name} - {employee.age} years
            old
          </span>
          {!employee.added && (
            <button
              onClick={() =>
                dispatch({ type: "ADD_MEMBER", payload: employee })
              }
            >
              ADD
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;