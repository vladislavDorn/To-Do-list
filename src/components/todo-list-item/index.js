import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

class TodoListItem extends Component {

    render() {
        const {  label, data = {} } = this.props;

        let className = `${s.todo__text}`
        const done = data.done ? className += ` ${s.todo__text_done}` : className;
        const important = data.important ? className += ` ${s.todo__text_important}` : className;
        
        return(
            <div className={s.todo__content}>
                <span onClick={() => this.props.onToggleDone(data.id)} className={`${done} ${important}`}>{label}</span>
                <div className={s.todo__btn_list}>
                    <button onClick={() => this.props.onToggleImportant(data.id)} className={`${s.todo__btn__item_exclamation} ${s.todo__btn}`}><i className="fa fa-exclamation"></i></button>
                    <button onClick={() => this.props.onADeleteItem(data.id)} className={`${s.todo__btn__item_trash} ${s.todo__btn}`}><i className="fa fa-trash-o"></i></button>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    ...state,
    todos: state.todo
}), dispatch=>({
    onADeleteItem: (id) => {
        dispatch({type: 'DELETE_TODO', payload: id})
    },
    onToggleDone: (id) => {
        dispatch({ type: 'TOGGLE_DONE', payload: id })
    },
    onToggleImportant: (id) => {
        dispatch({ type: 'TOGGLE_IMPORTANT', payload: id })
    }
}))(TodoListItem);