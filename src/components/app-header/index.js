import React from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

class AppHeader extends React.Component {
    render() {
        const { todo = [] } = this.props;
        return(
            <header className={s.header}>
                <h1 className={s.header__title}>My Todo List</h1>
                <p className={s.header__todo_details}>
                    {todo.filter(i => i.done === false).length} active,
                    {todo.filter(i => i.important === true).length} important,
                    {todo.filter(i => i.done === true).length} done</p>
            </header>
        );
    };
}

export default connect(state => state)(AppHeader);