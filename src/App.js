import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientDet from './components/PatientDet';



function App() {
  const [patients, setPatients] = useState([
    {
        id:1,
        full_name:"Ali Ahmed",
        birth_date:"10/10/1999",
        gender:"m",
        phone:"+96477889654"
    },
    {
        id:2,
        full_name:"Ameer Saad",
        birth_date:"10/10/2000",
        gender:"m",
        phone:"+96477809654"
    },
    {
        id:3,
        full_name:"Muna Ali",
        birth_date:"10/10/1998",
        gender:"f",
        phone:"+964777809654"
    }
  ])

const [filteredList, setFilteredList] = useState(patients);

const addPatient=(patient)=>{
  setPatients([...patients, patient])
  setFilteredList([...patients, patient])
  console.log(patients)
}

const onDelete =(id)=>{
  const delP = patients.filter(p=> p.id !== id)
  const delF = filteredList.filter(p=> p.id !== id)
  setFilteredList(delF)
  setPatients(delP)
}



  const filterBySearch = (event) => {
   
    const pcopy = patients
    console.log(pcopy)
    const query = event.target.value;
    
    var updatedList = [...patients];
    updatedList = updatedList.filter((item) => {
      return item.full_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    
    if(query){
      setPatients(updatedList);
    }
    else{
      setPatients(filteredList)
    }
    
  };

  return (
    <div className="App">
      <PatientForm addPatient={addPatient} />
      <div>
      <input className='search' placeholder='search' onChange={filterBySearch} />
      </div>
      <PatientDet patients={patients} onDelete={onDelete}/>
      {/* {patients.map(p=> <li>{p.full_name}</li>)} */}
      {/* <input  onChange={myFun}/>
      <button onClick={()=>myFun(person)}>click</button> */}
     
    </div>
  );
}

export default App;



// const [arr, setArr] = useState(['Ahmed', 'Fadi', 'Ammar', 'Aws', 'Zaid'])
// const [person, setPerson] = useState('Ahmed')
// let [filterArr, setFilterArr] = useState([])
// let [name, setName] = useState('')

// const myFun =(e)=>{
//   // console.log(name)
//   setName(e.target.value)
//   // const upp = arr.filter((item)=> item==name)
//   console.log(arr)
//   setFilterArr(arr.filter((item)=> item==name))
//   console.log(filterArr)


// }