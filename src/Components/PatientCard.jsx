const PCard = (props)=>{
    const patient = props.data
    let cls = patient.gender === 'M'? 'bg-blue' : 'bg-pink';
    return <div className={cls}>
         <p>{patient.gender}</p>
         <p>{patient.full_name}</p>
        <p>{patient.phone}</p>
        <p>{patient.phone}</p>
        <p>{patient.birth_date}</p>
    </div>
}

export default PCard;