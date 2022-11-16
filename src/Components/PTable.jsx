import '../App.css'
import PCard from './PCard';

function PTable(props) {
    return ( 
        <div>
          <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Full Name</td>
              <td>Phone</td>
              <td>Gender</td>
              <td>Birth Date</td>
              <td></td>
            </tr>
          </thead>

          {
            props.patients.map(p=> <PCard patient={p} onDelete={props.onDelete}/>)

          }
                    </table>
                </div>
            );
        }

export default PTable;