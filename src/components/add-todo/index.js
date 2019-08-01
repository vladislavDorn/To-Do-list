import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

 
class AddTodo extends Component {

    addTodo() {
        this.props.onAddItem(this.todoInput.value);
        this.todoInput.value = '';
    }

    render() {      
        return(
            <form className={s.add_todo} onSubmit={(e)=> e.preventDefault()}>
                <input ref={(input) => this.todoInput = input} type="text" className={s.add_todo__input} placeholder="Name your todo"/>
                <button onClick={this.addTodo.bind(this)} className={s.add_todo__btn}>Add item</button>
            </form>
        );
    };
}

export default connect((state)=>({
    todos: state.todo
}), dispatch=>({
    onAddItem: (text) => {
        dispatch({type: 'ADD_TODO', payload: text})
    }
}))(AddTodo);