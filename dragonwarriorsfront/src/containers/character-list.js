import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSomething } from '../actions';
import characterList from '../reducers/characters';
import { bindActionCreators } from 'redux';
import CharacterDetail from './character-detail'


class CharacterList extends Component {

   render() {

    let cards = this.props.characters.characters.map(character => <div className="card"
    onClick={ () => {
      this.props.selectedCharacter(character)
    }}
    onDoubleClick={ () => {
      this.props.selectedCharacter(null)
    }}
    style={{
      boxShadow: '0px 4px 8px 0 rgba(0, 0, 0, 1)',
      transition: '0.3s',
      float: 'left',
      marginLeft: '1.7%',
      textAlign: 'left',
      marginTop: '30px',
      marginRight: '1.5%'
    }} >
      <img src={character.image} style={{width: '135px', height: '150px'}}/>
      <p id="characterName">{character.name}</p>
      </div>

    )

    return (
      <div>
        {cards}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CharacterDetail />
      </div>
    )
  }

}

const mapStateToProps = (state)  => {

  return {
    characters: state.characters
  }
}


const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    selectedCharacter: doSomething
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
