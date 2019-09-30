import React from "react"

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            todo: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({ todo: '' })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    placeholder="Add Todo Task"
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
                <button>Remove Selected</button>
            </form>
        )
    }
}

export default TodoForm