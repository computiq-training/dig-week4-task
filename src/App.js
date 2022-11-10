import "./App.css";
import InputForm from "./components/form";
import Searchfield from "./components/search_field";
import Table from "./components/table";
import { PATIENTS } from "./components/patient";
import { useState } from "react";
const App = () => {
  const [filterPatient, setFilterPatient] = useState(PATIENTS);
  return (
    <div className="App">
      <InputForm
        filterPatient={filterPatient}
        setFilterPatient={setFilterPatient}
      />
      <Searchfield
        filterPatient={filterPatient}
        setFilterPatient={setFilterPatient}
      />
      <Table
        filterPatient={filterPatient}
        setFilterPatient={setFilterPatient}
      />
    </div>
  );
};

export default App;
