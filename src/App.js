import React from 'react';

export default () => {
  const users = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 20 },
    { name: 'yu' }
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

User.defaultProps = {
  name: 'noname',
  age: 8
}
