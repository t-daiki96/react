import React from 'react';
import PropsTypes from 'prop-types'

export default () => {
  const users = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 20 },
    { name: 'Yu', age: 3 }
  ]
  return (
    <div>
      {users.map((user, index) => {
        return <User name={user.name} age={user.age} key={index} />
      })}
    </div>
  )
}

const User = props => {
  return <div>I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
  name: PropsTypes.string,
  age: PropsTypes.number.isRequired
}
