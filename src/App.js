import './App.css';
import Patients from './pages/patients';
import Search from './pages/Search';
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
 

  return (
    <div className="App">
         <Login/>
         <Signup/>
         <Search/>
         <Patients/>
    </div>
  );
}

export default App;
