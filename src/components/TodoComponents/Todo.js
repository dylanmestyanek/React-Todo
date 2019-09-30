import React from "react"

class Todo extends React.Component {
    render(){
        return (
            <div 
                onClick={() => this.props.toggleCompleted(this.props.todo.id)}
                style={{textDecoration: this.props.todo.completed && "line-through"}}
            >
                {this.props.todo.task}
            </div>
        );
    }
}

export default Todo