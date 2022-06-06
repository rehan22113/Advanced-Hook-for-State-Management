import React,{useReducer} from 'react'
// import {contextApi} from './context';
import reducer from './reducer';
const istate = {
    name:"rehan",
    skill:"CSS"
}


const Page = () => {
  const [state,dispatch] = useReducer(reducer,istate)
    // const value = useContext(contextApi);
    console.log(state)
  return (
          <>
            <div>{state.name}</div>
            <div> {state.skill}</div>
          </>      
  )
  
}

export default Page