// import { useReducer } from "react";

// const initialState = {
//     count: 0
// }

// type CouterState = {
//     count: number
// }

// type UpdateAction = {
//     type: "increment" | "decrement",
//     payload?: number | null | undefined
// }

// type ResetAction = {
//     type: "reset",
// }

// type CouterAction = UpdateAction | ResetAction


// const reducer = (state: CouterState, action: CouterAction) => {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + action.payload };
//         case "decrement":
//             return { count: state.count - action.payload };
//         case "reset":
//             return { count: state.count };
//         default:
//             state;
//     }

// }

// export const ReducerCouter = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return(
//         <div>
//             {state.count}
//             <button type="button" onClick={()=>dispatch({type:"increment",payload:10})}>Increment</button>
//             <button type="button" onClick={()=>dispatch({type:"decrement",payload:10})}>Decrement</button>
//             <button type="button" onClick={()=>dispatch({type:"reset"})}>Reset</button>
//         </div>
//     )
// }