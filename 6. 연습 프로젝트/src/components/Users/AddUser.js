import React from 'react'

const AddUser = (props) => {

  // 폼 제출 함수
  const addUserHandler = event => {
    event.preventDefault();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>

      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>

      <button type="submit">Add User</button>
    </form>
  )
}

export default AddUser;
