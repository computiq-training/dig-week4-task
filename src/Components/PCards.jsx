const PCards = (props)=>{
  
    console.log(props)
    const patient = props.item
  
   return <tr >
        <td>{patient.full_name}</td> 
        <td>{patient.phone}</td>
        <td>{patient.gender}</td>
        <td>{patient.birth_date}</td>
        
        <td><button  type="button" onClick={(()=>props.deleteTd(patient.id))}>deleted</button></td>

    </tr>
    

}

export default PCards;