import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {

  // username, age state declare
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  // 폼 제출 함수
  const addUserHandler = event => {
    event.preventDefault();

    // input값 유효성 체크 : 비어있다면 리턴
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || (!isNaN(enteredUsername))) {
      return;
    }
    // 유저 나이 유효성 체크
    if (enteredAge < 1 || enteredAge > 120) {
      return;
    }
    // App.js로 데이터 보내주기
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <>
      <ErrorModal
        title="An error occuerd!"
        message="Something went wrong!"
      />
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
    </>
  )
}

export default AddUser;
