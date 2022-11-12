import './App.css';
import Patients from './components/patients';
import {PATIENTS} from "./components/patients";
import Search from './components/serach';
const App = ()=>{
  // State here
  return (
    <div className="App">
      <Patients/>
        {/*<Search PATIENTS={PATIENTS}/>*/}
      {/* Add new patient FORM */}
      {/* Search input */}
      {/* Table */}
    </div>
  );
}

export default App;
