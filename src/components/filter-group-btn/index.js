import React, { Component } from 'react';
import s from './style.module.scss';
import { connect } from 'react-redux';

class FilterGroupBtn extends Component {
    render() {

        const {  filter = '' } = this.props;

        let className = `${s.filter__item}`;
        let activeClassName = ` ${s.filter__item_ative}`

        return( 
            <div className={s.filter__list}>
                <button onClick={() => this.props.onFilterAll()} className={filter ? className : className + activeClassName}>All</button>
                <button onClick={() => this.props.onFilterImportant()} className={filter === 'important' ? className + activeClassName : className}>Important</button>
                <button onClick={() => this.props.onFilterDone()} className={filter === 'done' ? className + activeClassName : className}>Done</button>
            </div>
        );
    };
} 

export default connect(state => state,
    dispatch => ({
        onFilterAll: () => {
            dispatch({ type: 'FILTER_ALL', payload: '' })  
        },
        onFilterImportant: () => {
            dispatch({ type: 'FILTER_IMPORTANT', payload: 'important' })
        },
        onFilterDone: () => {
            dispatch({ type: 'FILTER_DONE', payload: 'done' })
        }
}))(FilterGroupBtn);