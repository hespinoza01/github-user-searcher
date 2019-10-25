import React from 'react';
import styles from './SearchBox.module.css';

function SearchBox({onChange, onSubmit}) {
  return(
    <form className={styles.searchbox} onSubmit={onSubmit}>
      <input className={styles.searchbox__input} type="text" onChange={onChange}/>
      <button className={styles.searchbox__submit}>Buscar</button>
    </form>
  );
}

export default SearchBox;
