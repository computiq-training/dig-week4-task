import React, {useState} from 'react'
import PATIENTS from './patients'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    
    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
      PATIENTS.filter((Patient) => {
      return Patient.full_name.match(searchInput);
        });
    }

return <div>
    <input type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />
        <table>
            <tbody class="dark:bg-blue-300">
               {
                    PATIENTS && PATIENTS.map((item,index)=>{
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
};

export default SearchBar;

