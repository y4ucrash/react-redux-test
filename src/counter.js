import React from 'react';
import { connect } from 'react-redux';

function Counter(props){
    console.log(`Our props: ${JSON.stringify(props)}`);
    return(
        <div>
            <h1>The count:</h1>
            <p>Current Count: {props.count}</p>
            <button onClick={
                props.onIncrementClick
            }>Count++</button>
        </div>
    )
}

// In redux
// When the button is clicked, we create an action.
// The action is dispatched to the store.
// The store runs its reducer, changing the state, and updating the component.

function mapStateToProps(state){
    console.log(`mapStateToProps running... State: ${JSON.stringify(state)}`);
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementClick: () =>{
            console.log(`Button clicked...`);
            // Actions are just objects that have type properties.
            const action = {type: `INCREMENT`};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);