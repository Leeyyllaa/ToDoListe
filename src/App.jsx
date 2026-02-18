// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

import MainTodo from "./components/MainTodo";
import { AppDataProvider } from "./components/NewContext";


export default function App() {
  return (
    <AppDataProvider>
   
      <MainTodo/>
   </AppDataProvider>
  )
}

  


 

