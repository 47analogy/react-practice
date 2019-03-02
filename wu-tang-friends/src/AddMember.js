import React, { Component } from "react";
import PropTypes from "prop-types";

class AddMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newMember: ""
    };
  }

  updateNewMember = e => {
    this.setState({
      newMember: e.target.value
    });
  };

  handleAddNew = () => {
    this.props.addNew(this.state.newMember);
    this.setState({
      newMember: ""
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.updateNewMember}
        />
        <button onClick={this.handleAddNew}> Add Member </button>
      </div>
    );
  }
}
AddMember.propTypes = {
  addNew: PropTypes.func.isRequired
};

export default AddMember;
