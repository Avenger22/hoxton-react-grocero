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
  const [buttonCategories, setButtonCategories] = useState('')

  const [clearClicked, setClearClicked] = useState(false)
  const [buttonStoreAdd, setButtonStoreAdd] = useState('')
  
  const [buttonStoreRemove, setButtonStoreRemove] = useState('')
  const [buttonCartCalculation, setButtonCartCalculation] = useState('')
  // #endregion

  // #region 'Conditional rendering and control of app'
  let filteredItems = items
  // #endregion

  // #region 'Returning the HTML, basically all the APP'
  return (

    <div className="app">

      <HeaderMenu 
        filteredItems = {filteredItems}
      />
      
      <MainMenu 
        filteredItems = {filteredItems} 
      />
     
    </div>

  )
  // #endregion

}

export default App