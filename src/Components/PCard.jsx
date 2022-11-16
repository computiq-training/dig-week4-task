function PCard(props) {
    return ( <tr>
        <td>{"#"}</td>
        <td>{props.patient.full_name}</td>
        <td>{props.patient.phone}</td>
        <td>{props.patient.gender}</td>
        <td>{props.patient.birth_date}</td>
        <td><button className="delete" onClick={()=>props.onDelete(props.patient.id)}>Delete</button></td>
      </tr> );
}

export default PCard;