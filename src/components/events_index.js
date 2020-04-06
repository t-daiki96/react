import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

const EventsIndex = props => {
  useEffect(() => {
    props.readEvents()
  }, [readEvents])

  const renderEvents = () => {
    return _.map(props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
      </thead>
      <tbody>
        {renderEvents()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
