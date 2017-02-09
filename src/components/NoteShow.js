import React from 'react'
import { connect } from 'react-redux'
// This component needs to know what the currently selected note is

// it should display that note's title and body...


function NoteShow( props ){
  return (
    <div>
      <h2>{ props.note.title }</h2>
    </div>)
}

// this component is going to need to get some data from our application state
  // the ID of current note
  // the title and the body of the note with that ID

function mapStateToProps(state){
  const note = state.notes.find( note => note.id === state.currentNote ) || {}

  return {
    note: note
  }
}

export default connect( mapStateToProps )( NoteShow )
