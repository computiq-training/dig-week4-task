import React, { useState } from "react";
import "./Patient.css";
import p from "./Patient info";
import PatientMapping from "./Patient Mapping";

const PatientForm = () => {
  const [patients, setPatients] = useState(p);
  const [fullName, setFullName] = useState("");
  const [birthDate, setBD] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [gender, setGender] = useState("male");

  const addNew = (e) => {
    e.preventDefault();
    const temp = patients;
    temp.push({
      id: patients.length + 1,
      full_name: fullName,
      birth_date: birthDate,
      gender: gender,
      phone: pNumber,
    });
    setPatients([...temp]);
    console.log(temp);
  };

  const changeFN = (e) => {
    let val = e.target.value;
    setFullName(val);
  };
  const changeBD = (e) => {
    let val = e.target.value;
    setBD(val);
  };
  const changePN = (e) => {
    let val = e.target.value;
    setPNumber(val);
  };

  const Gender = (e) => {
    console.log(gender);
    let val = e.target.value;
    setGender(val);
    console.log(val);
    console.log(gender);
  };

  return (
    <form className="input-section">
      <div className="inputs">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={changeFN}
        />
        <input
          type="text"
          placeholder="Birth date"
          value={birthDate}
          onChange={changeBD}
        />
        <input
          type="text"
          placeholder="Number"
          value={pNumber}
          onChange={changePN}
        />
        <select onChange={Gender}>
          <option value="male" defaultValue>
            Male
          </option>
          <option value="female">Female</option>
        </select>
        <div className="submit">
          <button onClick={addNew} onChange={null}>
            Add new
          </button>
        </div>
      </div>
      <input type="search" placeholder="Search" />
      <div className="table-container">
        <table className="patient-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Full Name</td>
              <td>Birth Date</td>
              <td>Gender</td>
              <td>Number</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <PatientMapping a={patients} del={setPatients} />
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default PatientForm;
