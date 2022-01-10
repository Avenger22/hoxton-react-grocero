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
  const [cartItems, setCartItems] = useState([]) //important for cart items array so i have 2 in state

  const [buttonSortOptions, setButtonSortOptions]  = useState('')
  const [buttonClear, setButtonClear]  = useState('')
  const [buttonStoreRemove, setButtonStoreRemove] = useState(null)
  // #endregion


  // #region 'Conditional rendering and control of app'
  let filteredItems = items //very important for conditional what to show, is connected with state and updating it etc
  
  let initialFilteredItems = JSON.parse(JSON.stringify(items)) //great for having initial withotu mutating array from state

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

  function addToCart (item) {

    // check if item is already in the cart
    const updatedCart = JSON.parse(JSON.stringify(cartItems))

    const match = updatedCart.find(cartItem => cartItem.id === item.id)

    if (match) {
      // if it is: increase quantity
      match.quantity++
    } 
    
    else {
      // otherwise: add item to cart
      const itemCopy = { ...item, quantity: 1 }
      updatedCart.push(itemCopy)
    }

    setCartItems(updatedCart)

  }

  function removeFromCart (item) {

    // check if item's quantity is 1
    let updatedCart = JSON.parse(JSON.stringify(cartItems))
    const match = updatedCart.find(cartItem => cartItem.id === item.id)

    if (match.quantity === 1) {
      // if it is: remove item from cart
      updatedCart = updatedCart.filter(cartItem => cartItem.id !== item.id)
    } 
    
    else {
      // otherwise: decrease quantity
      match.quantity--

    }

    setCartItems(updatedCart)
  }

  function calculateTotal () {

    let total = 0

    for (const item of cartItems) {
      total += item.price * item.quantity
    }

    return total.toFixed(2)

  }

  if (buttonCategories !== '') {
    filteredItems = filterByName(filteredItems)
  }

  else if (buttonCategories === '') {
    filteredItems = initialFilteredItems
  }

  if (buttonStoreRemove !== '') {
    filteredItems = removeButtonStore(filteredItems)
  }

  if (buttonSortOptions === 'alphabet' && buttonCategories === '') {
    filteredItems = filterBySortingAlphabet(filteredItems)
  }

  else if (buttonSortOptions === 'price' && buttonCategories === '') {
    filteredItems = filterBySortingPrice(filteredItems)
  }

  else if (buttonSortOptions === ''){
    filteredItems = initialFilteredItems
  }
  // #endregion


  // #region 'Returning the HTML, basically all the APP'
  return (

    <div className="app">

      <HeaderMenu 
        filteredItems = {filteredItems} //passing Props

        setButtonCategories = {setButtonCategories}
        setButtonSortOptions = {setButtonSortOptions}

        setButtonClear = {setButtonClear}
        buttonStoreRemove = {buttonStoreRemove}
        addToCart = {addToCart}
      />
      
      <MainMenu 
        filteredItems = {filteredItems} //passing props so i can use state in other components too and update it there
        setCartItems = {setCartItems}
        
        setClearClicked = {setClearClicked}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        
        calculateTotal={calculateTotal}
        cartItems = {cartItems}
        setCartItems = {setCartItems}
      />
     
    </div>

  )
  // #endregion

}

export default App