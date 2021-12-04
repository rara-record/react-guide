import React from 'react'

import Card from '../UI/Card'
import classes from './UserList.module.css'

// output : 폼에서 전송한 데이터를 받아 출력한다
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList
