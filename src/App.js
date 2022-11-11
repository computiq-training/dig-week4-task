import './App.css';
import { useState } from "react"
import {nanoid} from 'nanoid';
import PCards from './Components/PCards';

const App =  (props)=>{
    
    const [patients, setPatients] = useState(null) 
    const [filtered, setfiltered] = useState(null)
    const [Search, setSearch] = useState('')
    const [fullName , setFullName] = useState('')
    const [birth_date , setBirth] = useState('')
    const [gender, setGender] = useState('m')
    const [phone, setPhone] = useState('')
    const addNew = ()=>{
        if(!fullName)
        {
            alert('Please fill your name')
            return;
        }
        let pTemp = !patients?[]:patients
        pTemp.push({
            id:nanoid(),
                    full_name:fullName,
                    birth_date:birth_date,
                    gender:gender,
                    phone:phone,
        })
        setPatients([...pTemp])
        setfiltered([...pTemp])

    }
    const changePhone = (e)=>{
        let v = e.target.value
        console.log()
        setPhone(v)
    }
    const changeFullName = (e)=>{
        let v = e.target.value
        console.log(v)
        setFullName (v)
    }
    const changeBirth = (e)=>{
        let v = e.target.value
        console.log(v)
        setBirth (v)}
        const deleteTd=(e)=>{
            const copy = [...patients]
            
            const index = copy.findIndex((item) => item.id === e);
            copy.splice(index, 1);
            console.log(copy,"newcopy")
            setfiltered([...copy]);
            setPatients([...copy]);
            setSearch('')
            
                }
        
    
    const genderOnChange = (e)=>{
        setGender(e.target.value)
    }
    const SearchM = (e)=>{setSearch(e.target.value.toLowerCase())
        const temp = patients;
        console.log(temp);
        var nlist = [...temp];
        nlist = nlist.filter((item) => {
            return (item.full_name.toLowerCase().includes(Search))||(item.phone.toLowerCase().includes(Search));
          });
          if(!e.target.value.toLowerCase()){
            setfiltered([...patients]);
          }
          else{
            setfiltered([...nlist]);
          }
    //   ff(patients);
  }
    const submit = (e)=>{
        e.preventDefault()
        addNew()
       setFullName('')
       setGender('m')
       setPhone('')
       setBirth('')
    }
    
    // const ff =(v)=>{       setfiltered(patients)

    //   if (Search)
    //    setfiltered(v.filter((val)=>{return val.full_name.toLowerCase().includes(Search);console.log(val.full_name);}))
       
    // }
   
    
    return (<div>
        

    <form onSubmit={submit}>
        <input value={fullName} onChange={changeFullName} type="text" placeholder="Full Name"/>
        <input value={phone} onChange={changePhone} type="number" placeholder="Phone number"/>
        <select value={gender} onChange={genderOnChange}>
            <option value='m'>Male</option>
            <option value="f">Female</option>
        </select>
        <input value={birth_date} onChange={changeBirth} type="date" placeholder="Birth date"/>

        <input type="submit"/>
    </form>
    <input className='search' value={Search} onChange={SearchM} type="text" placeholder='filter by name or phone'
/>
   
     <table id="we">
         <thead>
    <th >
      <td>full_name</td> 
        <td>phone</td>
        <td>gendeh</td>
        <td>birth_date</td>
    </th>

    </thead>
    <tbody>
       {filtered?filtered.map((item,index)=>{
     return <PCards key={index} deleteTd={deleteTd} item={item}/>
    })
    :
    <p>No Data</p>}
    </tbody>
    </table>
   
          </div>
           );

    

}
export default App;