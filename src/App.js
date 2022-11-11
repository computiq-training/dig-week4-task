import './App.css';
import React from 'react';
import Patients from './Components/Patients';
import AddNew from './Components/Patients';
import SearchList from './Components/SearchList';
import PATIENTS from './Components/Patients';
import Search from './Components/Search';

function App () {
return (
  <div>
    <header>
    
      <AddNew/>
      <SearchList/>
      <Patients/>
      <Search details={PATIENTS}/>
    </header>
  </div>
);
}

export default App;
