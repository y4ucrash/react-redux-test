import {createStore} from 'redux';

const initialState = {
    count: 1
};

const reducer = (state = initialState, action) =>{
    console.log(`Reducer running... Action: ${JSON.stringify(action)}`)

    // If action.type is INCREMENT, copy state object into new object, then overwrite count with incremented value, and return it.

    switch(action.type){
        case `INCREMENT`: 
            return Object.assign({}, state, {count: state.count + 1});
        default:  
            return state;
    }
}

const store = createStore(reducer);

export default store;