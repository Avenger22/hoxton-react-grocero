// #region 'Importing'
import { useState } from 'react'

import initialItems from '../src/data/data'

import '../src/style.css'
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
  
  const [buttonStoreRemove, setButtonStoreRemove] = useState('') //we had it []
  const [buttonCartCalculation, setButtonCartCalculation] = useState('')

  const [buttonSortOptions, setButtonSortOptions]  = useState('')
  const [buttonClear, setButtonClear]  = useState('')
  // #endregion

  // #region 'Conditional rendering and control of app'
  let filteredItems = items //very important for conditional what to show, is connected with state and updating it etc
  let initialFilteredItems = items

  function filterByName(filteredItems) {
    return filteredItems.filter(item => item.name === buttonCategories)
  }

  function filterBySortingAlphabet(filteredItems) {

    return filteredItems.sort((a, b) => 
      (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1 : -1) : -1 )

  }

  function filterBySortingPrice(filteredItems) {

    return filteredItems.sort((function(a, b){

      if(a.name < b.name) { return -1 }
      if(a.name > b.name) { return 1 }
      return 0

    }))

  }
  
  function removeButtonStore(filteredItems) {
    // return filteredItems.filter(item => !buttonStoreRemove.filter(element => element.name === item.name))
    return filteredItems.filter(item => item.name !== buttonStoreRemove)
  }

  if (buttonCategories !== '') {
    filteredItems = filterByName(filteredItems)
  }

  // else if (buttonCategories === '') {
  //   filteredItems = initialFilteredItems
  // }

  if (buttonStoreRemove !== '') {
    filteredItems = removeButtonStore(filteredItems)
  }

  if (buttonSortOptions === 'alphabet' && buttonCategories === '') {
    filteredItems = filterBySortingAlphabet(filteredItems)
  }

  else if (buttonSortOptions === 'price' && buttonCategories === '') {
    filteredItems = filterBySortingPrice(filteredItems)
  }

  // else if (buttonSortOptions === ''){
  //   filteredItems = initialFilteredItems
  //   setItems(filteredItems)
  // }
  // #endregion

  // #region 'Returning the HTML, basically all the APP'
  return (

    <div className="app">

      <HeaderMenu 
        filteredItems = {filteredItems} //passing Props

        setButtonCategories = {setButtonCategories}
        setButtonStoreRemove = {setButtonStoreRemove}

        setButtonSortOptions = {setButtonSortOptions}
        setButtonStoreAdd = {setButtonStoreAdd}

        setButtonStoreClicked = {setButtonStoreClicked}
        setButtonClear = {setButtonClear}

        buttonStoreRemove = {buttonStoreRemove}
      />
      
      <MainMenu 
        filteredItems = {filteredItems} //passing props so i can use state in other components too and update it there
        setCartItems = {setCartItems}
        
        setClearClicked = {setClearClicked}
        setButtonCartCalculation = {setButtonCartCalculation}
      />
     
    </div>

  )
  // #endregion

}

export default App