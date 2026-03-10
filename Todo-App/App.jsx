import React from 'react'
import TodoForm from './components/TodoForm';

const App = () => {

  function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }
  return (
    <>
      <TodoForm generateId={generateId} />
    </>
  )
}

export default App
