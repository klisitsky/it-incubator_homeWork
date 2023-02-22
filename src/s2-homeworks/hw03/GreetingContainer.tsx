import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (
  name: string,
  setError: (value:string) => void,
  setName: (value:string) => void,
  addUserCallback: (name: string) => void
) => {
  setName(name)
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
  } else {
    setName('')
    addUserCallback(name)
  }
}

export const pureOnBlur = (name: string, setError: (value:string) => void) => {
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
  }
  // если имя пустое - показать ошибку
}

export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  if (event.key === 'Enter') {
    addUser()
  }
  // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(event.currentTarget.value) // need to fix
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(event, addUser)
  }

  const totalUsers = users.length // need to fix
  const lastUserName = totalUsers > 0 ? users[totalUsers - 1]?.name : ''// need to fix
  return (<Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />)
}

export default GreetingContainer
