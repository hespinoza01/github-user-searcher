import React from 'react'

function UserCard({user}){
  return (
    <ul>
      <li>{user.login}</li>
      <li>{user.html_url}</li>
      <li><img src={user.avatar_url} alt=""/></li>
    </ul>
  );
}

export default UserCard;
