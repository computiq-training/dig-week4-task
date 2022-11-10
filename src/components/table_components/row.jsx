import "./row.css";
import { PATIENTS } from "../patient";

const Row = (probs) => {
  
  const deleteRow = (e) => {
    PATIENTS.splice(e.target.value, 1)
    probs.set_var([...PATIENTS])
  };  
  return (
    <tr>
      <td>{probs.id}</td>
      <td>{probs.fullName}</td>
      <td>{probs.phone}</td>
      <td>{probs.gender}</td>
      <td>{probs.birthDate}</td>
      <td>
        <button
          type="submit"
          value={probs.idx}
          className="delete_button"
          onClick={deleteRow}
        >Delete </button>
      </td>
    </tr>
  );
};
export default Row;
