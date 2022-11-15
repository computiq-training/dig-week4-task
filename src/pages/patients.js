import { useState } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import PCard from "../components/PatientCard";


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
    const [fullName , setFullName] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')
    const [BirthDay, setBirthDay] = useState(new Date())
    const [gender, setGender] = useState('m')
    const [selectedDate, setSelectedDate] = useState(null)
  


    const addNew = ()=>{
        if(!fullName)
        {
            alert('Please fill your name')
            return 
        }
        let pTemp = !patients?[]:patients
        pTemp.push({
            id:4,
                    full_name:fullName,
                    birth_date:BirthDay,
                    gender:gender,
                    phone:PhoneNo
        })

        setPatients([...pTemp])
    }

    const changeFullName = (e)=>{
        let v = e.target.value
        console.log(v)
        setFullName(v)
    }

    const changePhoneNo = (e)=>{
        let PN = e.target.value
        setPhoneNo(PN)
    }

    const genderOnChange = (e)=>{
        setGender(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault()
        addNew()
    }

    return <div>
        <form onSubmit={submit} className="nav-bar">
            <div className="mb-2">
                <input value={fullName} onChange={changeFullName} type="text" placeholder="Full Name" className="block w-full px-4 py-2 mt-4 mr-4 ml-4 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/> 
            </div>
            <div className="mb-2">
                <input value={PhoneNo} onChange={changePhoneNo} type="text" placeholder="Phone Number" className="block w-full px-4 py-2 mt-4 mr-4 ml-8 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
            </div>
            <div className="block w-40 px-2 h-11 py-2 mt-4 mr-4 ml-14 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    placeholderText={'dd/mm/yyyy'}
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                    showYearDropdown
                    scrollableYearDropdown/>
            </div>
            <div className="mb-2">
                <select value={gender} onChange={genderOnChange} className="block w-full px-4 py-2 mt-4 mr-4 ml-4 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    <option value='m'>Male</option>
                    <option value="f">Female</option>
                </select>
             </div>
            <a href="#responsive-header" class=" w-1/10 px-4 py-2 mt-4 mb-20 mr-3 ml-10 text-lg block lg:inline-block text-sky-500 hover:text-white border-blue hover:border-transparent hover:text-cyan hover:bg-blue-500">
            <input type="submit"/>
             </a>   
        </form>
        <div className="w-full mx-auto flex flex-col overflow-x-auto shadow-md inline-block  align-middle overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="dark:bg-blue-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">Patient Full Name</th>
                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">Phone Number</th>
                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">Birthday</th>
                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">Gender</th>
                    </tr>
               </thead>
               <tbody class="dark:bg-blue-300">
               {
                    patients && patients.map((item,index)=>{
                        return <tr class="hover:bg-blue-400 dark:hover:bg-blue-400">
                                    <td class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">{item.full_name}</td>
                                    <td class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">{item.phone}</td>
                                    <td class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">{item.birth_date}</td>
                                    <td class="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase dark:text-white">{item.gender}</td>
                                </tr>
               })
               }
               </tbody>
            </table>
        </div> 
    </div>   
}

export default Patients;