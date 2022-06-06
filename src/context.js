import React,{createContext} from 'react'
const contextApi = createContext();

const context = ({children}) => {
  return (
    <contextApi.Provider value={{section:"Rehan",names:"1"}}>
         {children}
      </contextApi.Provider>
  )
}

export default context
export {contextApi}