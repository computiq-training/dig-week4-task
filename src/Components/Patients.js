import { useState } from "react"
import DatePicker from "react-datepicker";
import PCard from "./PatientCard";
import filtered from './SearchList'

const PATIENTS= [
    {
        id: 1,
        full_name: "Ali Ahmed",
        birth_date: "10/11/2022",
        gender: "M",
        phone: "0771000000"

    },
    {
        id: 2,
        full_name: "Muna Ahmed",
        birth_date: "11/11/2022",
        gender: "F",
        phone: "0771000001"

    },
    {
        id: 3,
        full_name: "Aya Ahmed",
        birth_date: "12/11/2022",
        gender: "F",
        phone: "0771000002"

    }
    
]

const Patients = (props)=> {
    const [patients, setPatients]= useState(PATIENTS)
    const [fullName, setFName] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [BirthDay, setBirthDay] = useState(new Date())
    const [gender, setGender] = useState('F')
    const [Delete, setDelete]= useState(PATIENTS)

    
      
    const AddNew =()=>
    {
        let PNew = !PATIENTS?[]:PATIENTS
        PNew.push({
            id: 4,
                gender: gender,
                full_name: fullName,
                birth_date: BirthDay,
                phone: PhoneNo
        })
        setPatients([...PNew])
    }

    const changeFullName = (e)=>{
            let N = e.target.value
            setFName(N)
    }
    const changePhoneNo = (e)=>{
        let PN = e.target.value
        setPhoneNo(PN)
    }
    const changeBirthDay = (e)=>{
            let BD = e.target.value
            setBirthDay(BD)
    }
    const changeGender = (e)=>{
        setGender(e.target.value)
    }
    const Add = (e)=>{
        e.preventDefault()
        AddNew()
     }

    return <div>
        {filtered.map(pat => {
              return (
                <div key={pat.full_name}>
                  <h2>{pat.gender}</h2>
                  <h2>{pat.phone}</h2>
                  <h2>{pat.birth_date}</h2>
     
                </div>
              );
            })
        }

        <ul>
            
        {PATIENTS.map(Delete => (
          <li key={Delete.id}>
            {Delete.name}{' '}
            <button onClick={() => {
              setDelete(
                PATIENTS.filter(a =>
                  a.id !== Delete.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
        </ul>

        <form onClick={Add}>
            <input value={fullName} onChange={changeFullName} type="text" placeholder="Full Name"/>
            <select value={gender} onChange={changeGender}>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>

            <input value={PhoneNo} onChange={changePhoneNo} type="text" placeholder="Phone Number"/>
            <DatePicker value={BirthDay} onChange={changeBirthDay} placeholder="Birthday"/>
            <input type="Add"/>
        </form>
        {
            patients?patients.map((item, index)=>{
             return <PCard key={index} data={item}/>
            })
            :
            <p>No Data</p>
        }

             <button>Delete</button>

    </div>

    }

export default Patients;