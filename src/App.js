
import {useReducer} from "react";
const init = (initCount) => {
    firstCount: initCount
    secondCount: initCount
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Inc':
            return {...state,firstCount: state.firstCount +1}
        case 'Dec':
            return {...state,firstCount: state.firstCount -1}
        case 'Reset':
            return init()
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
            <button onClick={()=>dispatch({type: 'Inc'})}>Inc</button>
        </div>
        <div></div>
    </div>
  );
}

export default App;
