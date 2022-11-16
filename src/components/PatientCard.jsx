const PCard = (props)=>{
    
    console.log(props)
    const patient = props.data
    return <ul class ="row">
        <li className='col-sm'>{patient.id}</li>
        <li class='col-sm'> {patient.full_name}</li>
        <li class='col-sm'> {patient.gender}</li>
        <li class='col-sm'> {patient.phone}</li>
        <li class='col-sm'> {patient.birth_date}</li>
    </ul>
}

export default PCard;