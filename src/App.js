import './App.css';
import { useState } from "react"


const PATIENTS = [
  {
    id: 1,
    full_name: "Ali Ahmed",
    birth_date: "10/10/1999",
    gender: "m",
    phone: "+96477889654"
  },
  {
    id: 2,
    full_name: "Ameer Saad",
    birth_date: "10/10/2000",
    gender: "m",
    phone: "+96477809654"
  },
  {
    id: 3,
    full_name: "Muna Ali",
    birth_date: "10/10/1998",
    gender: "f",
    phone: "+964777809654"
  }
];

const App = () => {
  const [patients, setPatients] = useState(PATIENTS)
  const [filteredValues, setFilteredValues] = useState(PATIENTS)
  const [searchValue, setSearchValue] = useState('')
  const [fullName, setFullName] = useState('')
  const [date, setDate] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('m')

  const addNew = () => {
    if (!fullName | !phone | !date) {
      alert('Please fill all fields')
      return;
    }
    let pTemp = !patients ? [] : patients
    // let pFiltered = !filteredValues ? [] : filteredValues
    let newObj = {
      id: patients.length + 1,
      full_name: fullName,
      birth_date: date,
      gender: gender,
      phone: phone
    }
    pTemp.push(newObj)

    setPatients([...pTemp])
    setFilteredValues([...pTemp])
    setSearchValue("")
  }
  const searchAction = (v) => {
    // let v = e.target.value
    var filtered = []
    setSearchValue(v)
    if (v === "") {
      setFilteredValues([...patients])
    } else {
      // filtered = patients.filter(p => v.trim().toUpp === p.full_name || v.trim() === p.phone)
      filtered = patients.filter(p => p.full_name.toUpperCase().indexOf(v.toUpperCase()) > -1 || p.phone.indexOf(v) > -1)
      setFilteredValues([...filtered])
    }
    console.log(v)

  }
  const changeFullName = (e) => {
    let v = e.target.value
    setFullName(v)
  }
  const changePhone = (e) => {
    let v = e.target.value
    setPhone(v)
  }
  const changeDate = (e) => {
    let v = e.target.value
    setDate(v)
  }
  const deletePatient = (id) => {
    let index = patients.findIndex((p) => p.id === id)
    let tempPatients = patients
    tempPatients.splice(index, 1)
    setPatients([...tempPatients])
    setFilteredValues([...tempPatients])
    searchAction(searchValue)
  }


  const genderOnChange = (e) => {
    setGender(e.target.value)
  }
  const submit = (e) => {
    e.preventDefault()
    addNew()
  }
  return (
    <div className="App">
      <form onSubmit={submit} className="patient-form">
        <div className='inputs'>
          <input value={fullName} onChange={changeFullName} type="text" placeholder="Full Name" className='form-input' />
          <input value={phone} onChange={changePhone} type="text" placeholder="Phone" className='form-input' />
          <input value={date} onChange={changeDate} type="date" placeholder="Birth Date" className='form-input' />
          <select value={gender} onChange={genderOnChange} className='form-input'>
            <option value='m'>Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <button type="submit" className='add-button'>New</button>
      </form>
      <div className='search-wrap'>
        <input value={searchValue} onChange={(e) => searchAction(e.target.value)} type="text" placeholder="Search..." className='search-field'></input>
      </div>
      <table className='patients-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            patients ? filteredValues.map((patient, index) => {
              return <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.full_name}</td>
                <td>{patient.phone}</td>
                <td>{patient.gender}</td>
                <td><button onClick={() => deletePatient(patient.id)} className={"delete-button"}>Delete</button></td>
              </tr>
            }) :
              <p>No Data</p>
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
