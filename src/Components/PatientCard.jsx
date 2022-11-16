import { Button } from "./Button";

const PCard = (props)=>{
    const helloFunc = ()=>alert('Hello')
    console.log(props)
    const patient = props.data
    //let cls = patient.gender == 'm'?'bg-blue':'bg-pink';
    return <div>
        <div class="grid grid-cols-4 gap-4">
          <div class="flex flex-col justify-between ">
             <p class="text-center text-gray-900 font-bold text-xl mb-2">{patient.full_name}</p>
        </div>
        <div>
           <p class="text-center text-gray-900 font-bold text-xl mb-2">{patient.gender}</p>
        </div>
        <p class="text-center text-gray-900 font-bold text-xl mb-2">{patient.phone}</p>  
        </div>
    </div>
}


export default PCard;