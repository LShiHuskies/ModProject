import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterDetail extends Component {
  render() {

    if (!this.props.character.selectedCharacter) {
      return null
    }
    return (
      <div id='description' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         transition: '0.3s',
         backgroundColor: 'rgba(0, 120, 100, 0.7)',
         float: 'left',
         marginLeft: '600px', marginRight: '600px',
         marginTop: '40px'
       }}>
        <h3 style={{textAlign: 'center', fontFamily: 'cursive', color: 'blue'}}> Character Name : {this.props.character.selectedCharacter.name}
          <img src={this.props.character.selectedCharacter.imageTwo} style={{width: '10%', float: 'right'}} />

    </h3>
        <div style={{backgroundColor: 'rgba(0, 40, 100, 0.8)', fontFamily: 'cursive', fontSize: '20px'}}> Brief Description:
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
