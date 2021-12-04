import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = (props) => {

  // username, age state declare
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  // 폼 제출 함수
  const addUserHandler = event => {
    event.preventDefault();
    // input값 유효성 체크 : 비어있다면 리턴
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // 유저 나이 유효성 체크
    if (enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge)
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }



  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        >
        </input>

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        >
        </input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;
