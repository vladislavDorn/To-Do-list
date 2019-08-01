const filter = (state = '', action) => {
    switch(action.type) {
        case 'FILTER_ALL':
            return action.payload;
        case 'FILTER_IMPORTANT':
            return action.payload;
        case 'FILTER_DONE':
            return action.payload;
        default:
            return state;
    }
}

export default filter;