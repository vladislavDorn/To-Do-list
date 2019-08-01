import React from 'react';
import s from './style.module.scss';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import FilterGroupBtn from '../filter-group-btn';
import TodoList from '../todo-list';
import AddTodo from '../add-todo';

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <AppHeader />
                <div className={s.navigation__list}>
                    <SearchPanel />
                    <FilterGroupBtn />
                </div>
                <TodoList />
                <AddTodo />
            </div>
        );
    }
};

export default App;