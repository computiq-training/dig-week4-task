import "./inputSearch.css";
import { PATIENTS } from "./patient";

const SearchField = (probs) => {
  const updateTable = (e) => {
    let result =
      e.target.value === ""
        ? PATIENTS
        : PATIENTS.filter((item) => {
            return item.full_name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
    probs.setFilterPatient(result);
    console.log(probs.filterPatient);
  };

  return (
    <input
      placeholder="Search By Name"
      className="search"
      type="text"
      onChange={updateTable}
    />
  );
};

export default SearchField;
