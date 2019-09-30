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

  addTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
  }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    })
    console.log(this.state.todos)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.addTodo}
        />
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App