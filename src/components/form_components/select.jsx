import './select.css'
const Select = (probs) => {
    return (
      <select value={probs.var} className="select" onChange={(e) => {probs.set_var(e.target.value);}}>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
    );
}

export default Select;