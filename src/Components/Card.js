import React from 'react';

function Card({P}) {
  return(
    <div>
      <div>
        <p>{P.gender}</p>
        <p>{P.full_name}</p>
        <p>{P.birth_date}</p>
        <p>{P.phone}</p>

      </div>
    </div>
  );
}

export default Card;