import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

import TodoListItem from '../todo-list-item';

class TodoList extends Component {
    render() {
        const {filter = '', todo = []} = this.props;
        return(
            <ul className={s.todo__list}>
                {
                    todo
                    .filter(i => filter ? i[filter] : true)
                    .filter(item => {
                      return  item.text.toLowerCase().includes(this.props.search.toLowerCase())
                    })
                    .map((label, index)=> {               
                        return(
                            <li className={s.todo__item} key={index}><TodoListItem data={label} label={label.text}/></li>
                        )
                    })
                }
            </ul>
        );
    };
} 

export default connect(state => state)(TodoList);