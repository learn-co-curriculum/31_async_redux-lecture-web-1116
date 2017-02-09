import React, { Component } from 'react'

import NavBar from './NavBar'
import NoteList from './NoteList'
import NoteCreate from './NoteCreate'

export default class App extends Component {
  render(){
    return(
      <div>
        < NavBar href="/" title="Ima Fix Wolves"/>
        <div className='container'>
          < NoteList />
          < NoteCreate />
        </div>
      </div>)
  }
}
