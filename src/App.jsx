// #region 'Importing'
import { useState } from 'react'
import initialItems from '../src/data/data'

import './style.css'
import '../src/App.css'

import HeaderMenu from './components/Header/HeaderMenu'
import MainMenu from './components/Main/MainMenu'
// #endregion

function App() {

  //#region 'State Object'
  const [items, setItems] = useState(initialItems)
  // console.log(items)
  // #endregion

  // #region 'Returning the HTML'
  return (

    <div className="app">

      <HeaderMenu 
        items = {items}
      />
      
      <MainMenu />
     
    </div>

  )
  // #endregion

}

export default App