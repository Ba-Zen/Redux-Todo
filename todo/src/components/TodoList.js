import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions'



class TodoList extends React.Component {
    state = {
        newTodo: ''
    }
    
    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    toggleTodo = id => {
        this.props.toggleTodo(this.state.id);
    }

    render() {
        return(
            <div className="todo-list">
                {this.props.todos.map(todo => (
                    <li 
                    onClick={() => this.toggleTodo(todo.id)} 
                    key={todo.id}>{todo.value}</li>
                ))}
                <br />
                <input 
                type="text"
                placeholder="Add new todo..."
                onChange={this.handleChanges}
                value={this.state.newTodo}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.todos)
    return{
        todos: state.todos
    };
};

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList);