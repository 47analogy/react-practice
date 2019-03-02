import React, { Component } from 'react'
import MemberList from './MemberList'
import AddMember from './AddMember'

class MemberContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      group: 'Wu Tang Clan',
      members: ['RZA', 'Old Dirty Bastard', 'Method Man', 'Ghostface Killah']
    }
  }

  addMember = (member) => {
    this.setState((state) => ({
      members: state.members.concat([member])
    }))
  }

  render() {
    return (
      <div>
        <h2> Group Name: {this.state.group}</h2>
        <div>
          <AddMember addNew={this.addMember} />
          <MemberList names={this.state.members} />
        </div>
      </div>
    )
  }
}

export default MemberContainer
