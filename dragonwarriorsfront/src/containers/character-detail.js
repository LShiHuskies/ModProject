import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterDetail extends Component {
  render() {
    
    if (!this.props.character.selectedCharacter) {
      return null
    }
    return (
      <div id='description' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s'}}>
        <h3> The Name of the Character you selected is : {this.props.character.selectedCharacter.name} </h3>
        <div> Brief Description:
            {this.props.character.selectedCharacter.description}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    character: state.selectedCharacter
  }
}

export default connect(mapStateToProps)(CharacterDetail);
