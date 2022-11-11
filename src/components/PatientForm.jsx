import { useState } from "react";
// import { uuid } from 'uuidv4'
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

function PatientForm(props) {
    const [name, setName]=useState('')
    const [birth, setBirth]= useState('')
    const [gender, setGender]= useState('m')
    const [phone, setPhone]= useState('')


    const handleName =(e)=>{
        setName(e.target.value)
    }

    const handleBirth =(e)=>{
        setBirth(e.target.value)
    }

    const handleGender =(e)=>{
        setGender(e.target.value)
    }

    const handlePhone =(e)=>{
        setPhone(e.target.value)
    }

    // const handleName =(e)=>{
    //     setName(e.target.value)
    // }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const patient ={
           id: uuidv4(),
            full_name: name,
            birth_date:birth,
            gender:gender,
            phone:phone

        }
        props.addPatient(patient)
        setBirth('')
        setName('')
        setPhone('')
    }





    return ( 
        <form onSubmit={handleSubmit}>
            <input placeholder="full Name" value={name} onChange={handleName}/>
            <input placeholder="Birth" value={birth} onChange={handleBirth}/>
            {/* <input placeholder="Gender" value={gender} onChange={handleGender}/> */}
            <select onChange={handleGender}>
                <option value='m' selected>Male</option>
                <option value='f'>Female</option>
            </select>
            <input placeholder="Phone" value={phone} onChange={handlePhone}/>
            <button type="submit">Add</button>
        </form>
     );
}

export default PatientForm;