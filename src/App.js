
import {useReducer} from "react";
const init = (initCount) => {
    return{firstCount: initCount,
        secondCount: initCount}

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Inc':
            return {...state,firstCount: state.firstCount +1}
        case 'Dec':
            return {...state,firstCount: state.firstCount -1}
        case 'Reset':
            return {...state, firstCount: 0, secondCount: 0}
        case 'Inc10':
            return {...state,secondCount: state.secondCount +10}
        case 'Dec10':
            return {...state,secondCount: state.secondCount -10}
        }
    }


const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div>
        <div>
            {state.firstCount}
            <button onClick={()=>dispatch({type: 'Inc'})}>Inc</button>
            <button onClick={()=>dispatch({type: 'Dec'})}>Inc</button>
            <button onClick={()=>dispatch({type: 'Reset'})}>Inc</button>
        </div>
        <div>
            {state.secondCount}
            <button onClick={()=>dispatch({type: 'Inc10'})}>Inc10</button>
            <button onClick={()=>dispatch({type: 'Dec10'})}>Inc10</button>
        </div>
    </div>
  );
}

export default App;
