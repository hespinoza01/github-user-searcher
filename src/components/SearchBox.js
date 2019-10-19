import React from 'react'

const SearchBox = ({onChange, onSubmit}) => {
  return(
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange}/>
      <button>Buscar</button>
    </form>
  );
};

export default SearchBox;
