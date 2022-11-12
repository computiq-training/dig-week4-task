import React from "react";

const Search = (props) => {
  const searchForItem = (e) => {
    let val = e.target.value
      ? props.list.filter((item) => {
          return item.full_name.toLowerCase().includes(e.target.value);
        })
      : props.list;
    props.setList([...val]);
    console.log(val);
  };
  return (
    <div>
      <input type="search" placeholder="Search" onChange={searchForItem} />
    </div>
  );
};

export default Search;
