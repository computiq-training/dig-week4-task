import React from "react";
import PatientsCard from "./Patients Card";
const PatientMapping = (prop) => {
  const deleteP = (e) => {
    e.preventDefault();
    prop.a.splice(e.target.value, 1);
    prop.del([...prop.a]);
  };
  return prop.a.map((item, index) => {
    return (
      <PatientsCard
        key={index}
        class={index % 2 === 0 ? "WHITE" : "GRAY"}
        id={item.id}
        full_name={item.full_name}
        birth_date={item.birth_date}
        gender={item.gender}
        phone={item.phone}
        click={deleteP}
      />
    );
  });
};

export default PatientMapping;
