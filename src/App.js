import './App.css';
import { useState } from 'react';
import Patients from './Components/Patients';
import PTable from './Components/PTable';

function App() {
  const [patients, setPatients] = useState([])
  // const [filteredList, setFilteredList] = useState(patients);

  const addPatient=(patient)=>{
    setPatients([...patients, patient])
    // setFilteredList([...patients, patient])
    console.log(patients)
  }
  
  const onDelete =(id)=>{
    const delP = patients.filter(p=> p.id !== id)
    // const delF = filteredList.filter(p=> p.id !== id)
    // setFilteredList(delF)
    setPatients(delP)
  }
 
    return (
      <div className="App">
         <Patients addPatient={addPatient} />
      <PTable patients={patients} onDelete={onDelete}/>

    </div>
  );
}

export default App;
