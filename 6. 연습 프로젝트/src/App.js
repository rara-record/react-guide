import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// input / output 로직으로 두개의 컴포넌트를 만든다.
function App() {
  const [userList, setUserList] = useState([]);

  // AddUser에서 데이터를 받으면, 
  // 새로운 사용자를 만들어서, 
  // setUserList로 state를 업데이트 시키게 만든 후에
  // userList에 prop으로 넘겨준다
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
