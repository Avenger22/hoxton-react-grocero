// #region 'Importing'
import { useState } from 'react'
import initialItems from '../src/data/data'

import './style.css'
import '../src/App.css'

import HeaderMenu from './components/Header/HeaderMenu'
import MainMenu from './components/Main/MainMenu'
// #endregion

function App() {

  return (

    <div className="app">

      <HeaderMenu />
      
      <MainMenu />
     
    </div>

  )

}

export default App