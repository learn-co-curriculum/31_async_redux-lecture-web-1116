export function addNote(note){
  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export function fetchNotes(){
  const notes = [{id: 1, title: "React", body: ""}, {id: 2, title: "Redux", body: ""}, {id: 3, title: "Dan Abramov", body: ""}]
  return {
    type: 'FETCH_NOTES',
    payload: notes
  }
}
