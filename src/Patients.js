import { useState } from "react"
const PATIENTS = [
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
];

const Patients =  (props)=>{
    
    const [patients, setPatients] = useState(PATIENTS)
    const [searchPatients, setSearchPatients] = useState(null)
    const [fullName , setFullName] = useState('')
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState('m')
    const [phone, setPhone] = useState("");

    const addNew = ()=>{
        if(!fullName)
        {
            alert('Please fill your name')
            return;
        }
        let pTemp = !patients?[]:patients
        pTemp.push({
                id:PATIENTS.length +1,
                full_name:fullName,
                birth_date:birthDate,
                gender:gender,
                phone:phone
        })
        setFullName('')
        setBirthDate('')
        setGender('m')
        setPhone('')
        setPatients([...pTemp])
        console.log (pTemp)
    }
    
    const searchFromTable = (e)=>{
        let vSearch = e.target.value;
        let tempSearch = !patients?[]:patients
        setSearchPatients([...tempSearch])

        const result = tempSearch.filter( ele=> {
            return  ele.full_name.toLowerCase()===vSearch
        });

        if(result.length>0)
            setSearchPatients([...result])
    }
    
    const changeFullName = (e)=>{
        setFullName(e.target.value)
    }
    const changeBirthDate = (e)=>{
        setBirthDate(e.target.value)
    }
    const changeGender = (e)=>{
        setGender(e.target.value)
    }
    const changePhone= (e)=>{
        setPhone(e.target.value)
    }


    const submit = (e)=>{
        e.preventDefault()
        addNew()
    }
    const deletePatient = (e)=>{
        let temp = patients;

        const result = temp.filter( ele=> {
            return  ele.id !=e.target.value
        });
        setPatients([...result])
        setSearchPatients([...result])

}
    return (
        <div>
            <form onSubmit={submit}>
            <input value={fullName} onChange={changeFullName} placeholder="Full Name" />
            <input value={phone} onChange={changePhone} placeholder="Phone" />
            <select value={gender} onChange={changeGender} >
                    <option value='m'>Male</option>
                    <option value="f">Female</option>
            </select>
            <input value={birthDate} onChange={changeBirthDate} placeholder="Birth Date" />
            <input type="submit"/>
            </form>
            <input type="search" id="search-box" placeholder="search here... " autocomplete="on" onChange= {searchFromTable}/>
            <table border="1" width="30%" >
                <caption>Information For Students</caption>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th colspan="2">Birth Date</th>

                                </tr>
                            </thead>
                            {
                                searchPatients?searchPatients.map((item,index)=>{
                                    return (
                                            <tr>
                                                <td>{item.full_name}</td>
                                                <td>{item.birth_date}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.phone}</td>
                                                <td><button value={item.id} onClick={deletePatient} >Delete</button></td>
                                            </tr>
                                        )
                                    
                                }) 
                                :patients?patients.map((item,index)=>{
                                    return (
                                            <tr>
                                                <td>{item.full_name}</td>
                                                <td>{item.birth_date}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.phone}</td>
                                                <td><button onClick={deletePatient} value={item.id}>Delete</button></td>
                                            </tr>
                                        )
                                }):<p>No Data</p> 
                                
                            }
                            
                            <tbody>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5">complete the information</td>
                                </tr>
                            </tfoot>
                    </table>
        </div>
    )
}

export default Patients;
