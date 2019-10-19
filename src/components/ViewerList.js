import React from 'react';

import UserCard from "./UserCard";

function ViewerList({users}){
  return (
    <div>
      {users.map(user => <UserCard key={user.id} user={user}></UserCard>)}
    </div>
  );
}

export default ViewerList;
