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

  const [buttonStoreClicked, setButtonStoreClicked] = useState(false)
  const [cartItems, setCartItems] = useState([])
  
  const [buttonStoreRemove, setButtonStoreRemove] = useState('')
  const [buttonCartCalculation, setButtonCartCalculation] = useState('')
  // #endregion

  // #region 'Conditional rendering and control of app'
  let filteredItems = items //very important for conditional what to show, is connected with state and updating it etc
  // #endregion

  // #region 'Returning the HTML, basically all the APP'
  return (

    <div className="app">

      <HeaderMenu 
        filteredItems = {filteredItems} //passing Props

        buttonCategories = {buttonCategories}
        setButtonCategories = {setButtonCategories}

        buttonStoreRemove = {buttonStoreRemove}
        setButtonStoreRemove = {setButtonStoreRemove}

        buttonStoreAdd = {buttonStoreAdd}
        setButtonStoreAdd = {setButtonStoreAdd}

        buttonStoreClicked = {buttonStoreClicked}
        setButtonStoreClicked = {setButtonStoreClicked}
      />
      
      <MainMenu 
        filteredItems = {filteredItems} //passing props so i can use state in other components too and update it there

        cartItems = {cartItems} 
        setCartItems = {setCartItems}

        clearClicked = {clearClicked}
        setClearClicked = {setClearClicked}

        buttonCartCalculation = {buttonCartCalculation}
        setButtonCartCalculation = {setButtonCartCalculation}
      />
     
    </div>

  )
  // #endregion

}

export default App