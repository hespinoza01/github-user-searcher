import React from 'react'
import styles from './UserCard.module.css'

function UserCard({user}){
  return (
    <article className={styles.card}>
      <img src={user.avatar_url} alt="" className={styles.card__img}/>
      <div className={styles.card__infoContainer}>
        <h3 className={styles.card__title}>{user.login}</h3>
        <p>
          <a className={styles.card__link} href={user.html_url} target="_blank" rel="noopener noreferrer">Ver perfil</a>
        </p>
      </div>
    </article>
  );
}

export default UserCard;
