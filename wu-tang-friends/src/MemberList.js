import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MemberList extends Component {
  render() {
    return (
      <div>
        <h3>Members</h3>
        <ul>
          {this.props.names.map((name, index) => {
            return <li key={index}> {name}</li>
          })}
        </ul>
      </div>
    )
  }
}
// ShowList.defaultProps = {
//   names: []
// }

export default MemberList

