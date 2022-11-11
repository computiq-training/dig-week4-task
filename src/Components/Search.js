import React, { useState } from 'react';
import SearchList from './SearchList';

function Search({ details }) {

  const [search, setsearch] = useState("");

  const PFlitered = details.filter(
    P => {
      return (
        P
        .name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
        P
        .gender
        .toLowerCase()
        .includes(search.toLowerCase()) ||
        P
        .Phone
        .toLowerCase()
        .includes(search.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    setsearch(e.target.value);
  };
  function searchList() {
    return (
        <SearchList PFlitered={PFlitered} />
    );
  }

  return (
    <section>
      <div>
        <input 
          type = "search" 
          placeholder = "Search" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;