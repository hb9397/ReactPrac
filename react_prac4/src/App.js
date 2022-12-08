import React from 'react'
import ToDoTemplate from './components/ToDoTemplate'
import ToDoInsert from './components/ToDoInsert'

const App = () => {
  return (
    <ToDoTemplate>
      <ToDoInsert/>
    </ToDoTemplate>
  )
}

export default App