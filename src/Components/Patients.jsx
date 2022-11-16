import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

function PForm(props) {
    const [fullName, setFullName]=useState('')
    const [phone, setPhone]= useState('')
    const [gender, setGender]= useState('')
    const [birthDate, setBirthDate]= useState('')


    const addName =(e)=>{
        setFullName(e.target.value)
    }

    const addBirth =(e)=>{
        setBirthDate(e.target.value)
    }

    const addGender =(e)=>{
        setGender(e.target.value)
    }

    const addPhone =(e)=>{
        setPhone(e.target.value)
    }

    const Submit =(e)=>{
        e.preventDefault()
        const patient ={
           id: uuidv4(),
            full_name: fullName,
            birth_date:birthDate,
            gender:gender,
            phone:phone

        }
        props.addPatient(patient)
        setBirthDate('')
        setFullName('')
        setPhone('')
    }

    return ( 
        <form className=" form_class" onSubmit={Submit}>
            <input placeholder="Full Name" value={fullName} onChange={addName}/>
            <input placeholder="Phone" value={phone} onChange={addPhone}/>
            <select onChange={addGender} placeholder="Gender">
                <option value='Male' selected>Male</option>
                <option value='Female'>Female</option>
            </select>
            <input placeholder="Birth Date" value={birthDate} type="date" onChange={addBirth}/>
            <button type="submit" className ="button">New</button>
        </form>
     );
}

export default PForm;