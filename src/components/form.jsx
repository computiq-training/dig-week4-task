import Input from "./form_components/input";
import Select from "./form_components/select";
import "./form.css";
import React, { useState } from "react";
import { PATIENTS, addPatient } from "./patient";

const InputForm = (probs) => {
  const [fullName, setfullName] = useState("");
  const [gender, setGender] = useState("m");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const newPatient = (e) => {
    e.preventDefault();
    
    PATIENTS.push({
      id: PATIENTS[PATIENTS.length - 1].id + 1,
      full_name: fullName,
      birth_date: birthDate,
      gender: gender,
      phone: phone,
    })
    
    probs.setFilterPatient([...PATIENTS]);
    console.log(PATIENTS);
    
  };

  return (
    <form className="form">
      <Input var={fullName} set_var={setfullName} placeholder="Full Name" />
      <Input var={phone} set_var={setPhone} placeholder="Phone" />
      <Select var={gender} set_var={setGender} />
      <Input var={birthDate} set_var={setBirthDate} placeholder="Birth Date" />
      <input value="New" type="submit" className="submitButton" onClick={newPatient} />
    </form>
  );
};

export default InputForm;
