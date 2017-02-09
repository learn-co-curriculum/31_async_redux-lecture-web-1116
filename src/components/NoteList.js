import React from 'react'

import { connect } from 'react-redux'
import { fetchNotes, updateCurrentNote } from '../actions'

class NoteList extends React.Component {

  componentDidMount(){
    this.props.fetchNotes()
  }

  handleClick(noteId){
    this.props.updateCurrentNote(noteId)
  }

  render (){
    const notes = this.props.notes
    console.log(notes)
    return (
      <div>
        <h2>All Notes</h2>
        <ul>
          { notes.map((note, i) =>
            <li key={i} onClick={ this.handleClick.bind(this, note.id)} >
            <a>{ note.title  }</a></li>
          ) }
        </ul>
      </div>)
  }
}

function mapStateToProps (state){
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchNotes: function(){
      let action = fetchNotes()
      dispatch( action )
    },
    updateCurrentNote: function(noteId){
      let action = updateCurrentNote( noteId )
      dispatch( action )
    }
  }
}

// Whenever an li is clicked on,
// I need to be able to change what the currently selected note is

export default connect( mapStateToProps, mapDispatchToProps )( NoteList )
