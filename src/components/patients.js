import { useState } from "react"
import PCard from "./PatientCard";
import Search from "./serach";
let PATIENTS = [
];
let i =0;

const Patients =  (props)=>{
    const [patients, setPatients] = useState(null)
    const [fullName , setFullName] = useState('')
    const [gender, setGender] = useState('m')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const addNew = ()=>{
        let pTemp = !patients?[]:patients

        pTemp.push({
            id:i,
            full_name:fullName,
            birth_date:birthDate,
            gender:gender,
            phone:phone
        })
        PATIENTS.push({
            id: i,
            full_name: fullName,
            birth_date: birthDate,
            gender: gender,
            phone: phone
        });
        i++;
        console.log(PATIENTS);
        setPatients([...pTemp])
    }

    const changeFullName = (e)=>{
        let v = e.target.value
        console.log(v)
        setFullName(v)
    }
    const changeBirthDate = (e)=>{
        let v = e.target.value
        console.log(v)
        setBirthDate(v)
    }

    const PhoneOnChange = (e)=>{
        let v = e.target.value
        console.log(v)
        setPhone(v)
    }
    const genderOnChange = (e)=>{
        setGender(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        addNew()
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">

                <form class="form-inline" onSubmit={submit} >
            <input class="form-control mb-4 mr-sm-2 mt-4 "  value={fullName} onChange={changeFullName} type="text" placeholder="Full Name"/>
            <select class="form-control mb-4 mr-sm-2 mt-4 " value={gender} onChange={genderOnChange}>
                <option value='Male'>Male</option>
                <option value="Female">Female</option>
            </select>

            <input class="form-control mb-4 mr-sm-2 mt-4 " value={phone} onChange={PhoneOnChange} type="text" placeholder="Phone Number"/>
                 <input class=" form-control mb-4 mr-sm-2 mt-4 " value={birthDate} onChange={changeBirthDate} type="date" placeholder="Birth Date"/>
                 <input class=" form-control mb-4 mr-sm-2 mt-4 " type="submit"/>

                 <Search PATIENTS={PATIENTS}/>

        </form>
        {/*{*/}
        {/*    patients?patients.map((item,index)=>{*/}
        {/*            return <PCard key={index} data={item}/>*/}
        {/*        })*/}
        {/*        :*/}
        {/*        <p>No Data</p>*/}
        {/*}*/}
    </div>
            </div>
        </div>
    </div>

}

export default Patients;
export {PATIENTS};
