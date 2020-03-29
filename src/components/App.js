import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const Counter = props => {
  return (
    <React.Fragment>
      <button onClick={props.increment}>plus</button>
      <button onClick={props.decrement}>minus</button>
      {props.value}
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
