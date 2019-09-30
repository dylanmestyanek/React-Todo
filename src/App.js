import React from 'react'

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: []
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App