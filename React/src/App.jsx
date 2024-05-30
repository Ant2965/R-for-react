import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  MsgBox  from './msgBox'

function Title() {
  return <h1>I am a PATA NI</h1>;
}
function App() {
  return (

    <>
      <MsgBox userName="Antriksh" textColor="yellow"/>
      <MsgBox userName="apna college" textColor="red"/>

      <Title/>

    </>
  );


}



export default App
