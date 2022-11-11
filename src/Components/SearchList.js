import React from 'react';
import Card from './Card';


function SearchList(PFlitered) {
  const filtered = PFlitered.filter(P => <Card key={P.full_name || P.gender || P.phone || P.birth_date}/>)
  return(
    <div>
      {filtered} 
  </div>
  ) 
} 

export default SearchList;



// function SearchList({ filteredPIENTS }) {
//   const filtered = filteredPIENTS.map(PIENTS =>  <Card key={PIENTS.id} PIENTS={PIENTS} />); 
//   return (
//     <div>
//       {filtered}
//     </div>
//   );
// }

// export default SearchList;