import {useCallback, useState} from "react"
import PCard from "./PatientCard";
// import {PATIENTS} from "./patients";
const Search =  ({PATIENTS})=>{
    const [searchField, setSearchField] = useState("");
    let filteredPatients = PATIENTS.filter((patient) => {
         return patient.full_name.toLowerCase().includes(searchField.toLowerCase());
    });
    const ChangeSerachField = (e)=>{
        let v = e.target.value
        console.log(v)
        setSearchField(v)
    }

    return <div>
        <input class={'form-control m-lg-auto mb-2'} value={searchField} onChange={ChangeSerachField} type="text" placeholder="Search"/>
        <ul class="list-group">
    {
        filteredPatients?filteredPatients.map((item,index)=>{
                return <li class="list-group-item"><PCard key={index} data={item}/></li>
            })
            :
            <p>No Data</p>
    }

        </ul>
</div>


}
export default Search