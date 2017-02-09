export function addNote(noteTitle){
  return {
    type: 'ADD_NOTE',
    payload: {title: noteTitle, body: ''}
  }
}

export function fetchNotes(){
  const notes = [{id: 1, title: "React", body: ""}, {id: 2, title: "Redux", body: ""}, {id: 3, title: "Dan Abramov", body: ""}]
  return {
    type: 'FETCH_NOTES',
    payload: notes
  }
}
