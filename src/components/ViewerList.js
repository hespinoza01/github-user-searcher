import React from 'react';

import UserCard from "./UserCard";

function ViewerList({users}){
  return (
    <section>
      {users.map(user => <UserCard key={user.id} user={user}></UserCard>)}
    </section>
  );
}

export default ViewerList;
