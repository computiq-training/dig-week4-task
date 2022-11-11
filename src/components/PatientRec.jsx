function PatientRec(props) {
    return ( <tr>
    
        <td>{props.patient.full_name}</td>
        <td>{props.patient.birth_date}</td>
        <td>{props.patient.gender}</td>
        <td>{props.patient.phone}</td>
        <td><button onClick={()=>props.onDelete(props.patient.id)}>Delete</button></td>
      </tr> );
}

export default PatientRec;