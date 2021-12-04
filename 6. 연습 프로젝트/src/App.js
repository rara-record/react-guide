import React from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// input / output 로직으로 두개의 컴포넌트를 만든다.
function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
