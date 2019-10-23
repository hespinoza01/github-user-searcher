import React from 'react'

function UserCard({user}){
  return (
    <article>
      <img src={user.avatar_url} alt=""/>
      <div>
        <h2>{user.login}</h2>
        <p>
          <span><a href={user.html_url} target="_blank" rel="noopener noreferrer">Ver perfil</a></span>
        </p>
      </div>
    </article>
  );
}

export default UserCard;
