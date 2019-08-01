import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

class SearchPanel extends Component {
    render() {
        return(
            <div className={s.search}>
                <input value={this.props.search} onChange={({target}) => this.props.onSearchTodo(target.value)} className={s.search_input} type="text" placeholder="Search"/>
            </div>  
        )
    }
}
export default connect(state => state, dispatch => ({
   onSearchTodo: (todo) => {
        dispatch({ type: 'SEARCH_TODO', payload: todo })
   } 
}))(SearchPanel);