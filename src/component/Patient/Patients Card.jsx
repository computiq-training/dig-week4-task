import React from "react";
import "./Patient.css";

const PatientsCard = (props) => {
  return (
    <tr className={props.class}>
      <td>{props.id}</td>
      <td>{props.full_name}</td>
      <td>{props.birth_date}</td>
      <td>{props.gender}</td>
      <td>{props.phone}</td>
      <td>
        <div className="delete">
          <button className="Delete-Patient" onClick={props.click}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PatientsCard;
