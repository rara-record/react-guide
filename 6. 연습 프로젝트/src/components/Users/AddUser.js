import React, { useState } from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = (props) => {

  // username, age state declare
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // 폼 제출 함수
  const addUserHandler = event => {
    event.preventDefault();

    // input값 유효성 체크 : 비어있다면 에러 모달 출력
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || (!isNaN(enteredUsername))) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age(> 0).'
      });
      return;
    }
    // 유저 나이 유효성 체크 : 맞지 않다면 에러 모달 출력
    if (+enteredAge < 1 || enteredAge > 120) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid name and age (non-empty valuse).'
      });
      return;
    }
    // App.js로 데이터 보내주기
    props.onAddUser(enteredUsername, enteredAge);
    // input 초기화
    setEnteredUsername('');
    setEnteredAge('');
  }

  // 에러 메세지 닫기 : setError를 null 변경한다
  const errorHandler = () => {
    setError(null)
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
