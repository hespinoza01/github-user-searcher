import React from 'react';
import styles from './SearchBox.module.css';

function SearchBox({onChange, onSubmit}) {
  return(
    <form class={styles.searchbox} onSubmit={onSubmit}>
      <input class={styles.searchbox__input} type="text" onChange={onChange}/>
      <button class={styles.searchbox__submit}>Buscar</button>
    </form>
  );
}

export default SearchBox;
