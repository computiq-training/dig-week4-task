import { useState } from 'react';
import './App.css';
  const PATIENTS = [
    {
      id:1,
      full_name:"Ali Ahmed",
      birth_date:"1990-11-14",
      gender:"Male",
      phone:"+9647803016985"
    },
    {
      id:2,
      full_name:"Ameer Saad",
      birth_date:"2014-1-18",
      gender:"Male",
      phone:"+9647803019924"
    },
    {
      id:3,
      full_name:"Muna Ali",
      birth_date:"2019-4-15",
      gender:"Female",
      phone:"+9647804017802"
    }
  ];
const App = (props)=>{
  // State here
      const [patients, setPatients] = useState(PATIENTS)
      const [filterPatients, setFilterPatient] = useState(PATIENTS)
      const [full_name, setFullName] = useState()
      const [phone, setPhone] = useState()
      const [birth_date, setBirthDate] = useState()
      const [gender, setGender] = useState()
      const [search, setSearch] = useState()
      
      const addNew = () =>{
        if(!full_name){
          alert('Please fill your name')
          return;
        }
        let pTemp = !patients?[]:patients
        pTemp.push({
          id:pTemp.length>0?pTemp[pTemp.length - 1].id + 1:1,
          full_name:full_name,
          birth_date:birth_date,
          gender:gender,
          phone:phone
        })
        setPatients([...pTemp])
        setFilterPatient([...pTemp])
      }


    const FullNamOnChange = (e)=>{
      setFullName(e.target.value)
    }

    const genderOnChange = (e)=>{
      setGender(e.target.value)
    }
    
    const birthDateOnChange = (e)=>{
      setBirthDate(e.target.value)
    }
    
    const phoneOnChange = (e)=>{
      setPhone(e.target.value)
    }
    
    const submit = (e)=>{
      e.preventDefault()
      addNew()
    }

    const SearchOnChange = (e) => {
      setSearch(e.target.value)
      let pTemp = !patients?[]:patients
      let new_pTemp = [...pTemp];
      new_pTemp = (e.target.value)===""
      ?pTemp
      :new_pTemp.filter((person) => { 
        return person.full_name.toLowerCase().includes(e.target.value.toLowerCase()) || 
              person.phone.includes(e.target.value) || 
              person.gender.includes(e.target.value) || 
              person.birth_date.includes(e.target.value) || person.id.toString().includes(e.target.value) ;});
      setFilterPatient([...new_pTemp])
    };

    const removeHandler = (event)=>{
      let event_id = event.target.value;
      let pTemp = !filterPatients?[]:filterPatients
      pTemp = pTemp.filter((item) => item.id !== parseInt(event_id));
      setFilterPatient([...pTemp]);  
      setPatients([...pTemp])
    }

    return (
      <div className="App">
        {/* Add new patient FORM */}
        {/* Search input */}
        {/* Table */}
        
        <form onSubmit={submit}>
          <input className='input_text' id="full_name" name="full_name" value={full_name || ''} onChange={FullNamOnChange} type="text" placeholder="Full Name" required/>
          <input className='input_text' id="phone" name="phone" value={phone  || ''} onChange={phoneOnChange} type="text" placeholder="Phone" required/>
          <select className='input_text' value={gender  || ''} onChange={genderOnChange} required>
            <option value="" defaultValue>Choose your option</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          <input className='input_text' value={birth_date || ''} onChange={birthDateOnChange} type="date" placeholder="Birth Date" required />
          <button type="submit" className="add">Add</button>
          <br/>
          <input className='input_search' value={search || ''} onChange={SearchOnChange} type="text" placeholder="Search By Full Name or Phone or Other" />
        </form>


        <div>
            <h2>Solved By Karar Haider</h2>
            <table>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Birth Date</th>
                    <th>Event</th>
                </tr>
              </thead>
              <tbody>
                {
                  filterPatients?filterPatients.map((item, onRemove )=>{
                    const patient =  item
                    return (
                      <tr key={patient.id}>
                          <td>{patient.id}</td>
                          <td>{patient.full_name}</td>
                          <td>{patient.phone}</td>
                          <td>{patient.gender}</td>
                          <td>{patient.birth_date}</td>
                          <td><button  type="button" value={patient.id} onClick={removeHandler} className="button delete">Deleted</button></td>
                      </tr>
                    )
                  })
                  :
                  <p>No Data</p>
                }
              </tbody>
            </table>
        </div>

      </div>
    );
}

export default App;
