import React from 'react'
import Page from './Page';
import Page2 from './Page2';
import Context from './context';

const App = () => {
  return <>
  <Context>
    <div>hello</div>
  
    <Page /> 
    {/* <Page2 />    */}
  </Context>


  </>
}

export default App

