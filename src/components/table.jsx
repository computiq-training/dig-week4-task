
import {PATIENTS} from "./patient";
import "./table.css";
import Row from "./table_components/row";
const Table = (probs) => {
  let p = probs.filterPatient? probs.filterPatient:PATIENTS;
  return (
    <div className="container-fluid tablePos">
      <table className="table">
        <thead>
          <tr className="bg-primary ">
            <td>id</td>
            <td>fullName</td>
            <td>phone</td>
            <td>gender</td>
            <td>birthDate</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {p.map((item, index) => {
            return (
              <Row
                id={item.id}
                fullName={item.full_name}
                phone={item.phone}
                gender={item.gender}
                birthDate={item.birth_date}
                idx={index}
                key={index}
                set_var={probs.setFilterPatient}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
