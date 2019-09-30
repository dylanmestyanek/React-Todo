import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component {
    render(){
        return this.props.todos.map(todo => <Todo todo={todo} toggleCompleted={this.props.toggleCompleted} />);
    }
}

export default TodoList;