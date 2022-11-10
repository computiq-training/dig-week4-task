const PATIENTS = [
    {
        id:1,
        full_name:"Ali Ahmed",
        birth_date:"10/10/1999",
        gender:"m",
        phone:"+96477889654"
    },
    {
        id:2,
        full_name:"Ameer Saad",
        birth_date:"10/10/2000",
        gender:"m",
        phone:"+96477809654"
    },
    {
        id:3,
        full_name:"Muna Ali",
        birth_date:"10/10/1998",
        gender:"f",
        phone:"+964777809654"
    }
]

const addPatient = (id,full_name, birth_date ,gender, phone) => {
  PATIENTS.push({
    "id": id,
    "full_name": full_name,
    "birth_date": birth_date,
    "gender": gender,
    "phone":phone
  })
  
}

export {PATIENTS, addPatient};