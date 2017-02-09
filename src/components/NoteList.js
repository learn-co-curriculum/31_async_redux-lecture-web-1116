import React from 'react'

import { connect } from 'react-redux'
import { fetchNotes } from '../actions'

class NoteList extends React.Component {

  componentDidMount(){
    this.props.fetchNotes()
  }

  render (){
    const notes = this.props.notes
    return (
      <div>
        <h2>All Notes</h2>
        <ul>
          { notes.map((note, i) => <li key={i}>{ note.title  }</li> ) }
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
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( NoteList )
