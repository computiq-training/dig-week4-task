import '../App.css'
import PatientRec from './PatientRec';

function PatientDet(props) {
    return ( 
        <div>
            <table>
            <tr>
    
    <th>Full Name</th>
    <th>Birth-Date</th>
    <th>Gender</th>
    <th>Phone</th>
    <th>&nbsp;</th>
  </tr>
  
  {
    
    props.patients.map(p=> <PatientRec patient={p} onDelete={props.onDelete}/>)

  }
            </table>
        </div>
     );
}

export default PatientDet;