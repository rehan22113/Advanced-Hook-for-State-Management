import React,{useContext} from 'react'
import { contextApi } from './context'
const Page2 = () => {
  const value = useContext(contextApi);
  return (
          <>
            <div>{value.names}</div>
            <div> {value.section}</div>
          </>      
  )
}

export default Page2