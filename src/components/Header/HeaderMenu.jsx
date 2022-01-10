import HeaderItems from '../Header/Items/HeaderItems'
import ButtonsWrapper from '../Header/Buttons/ButtonsWrapper'
import HeaderTitle from '../Header/HeaderTitle'

import "../Header/HeaderMenu.css"

function HeaderMenu(props) {

    //decounstructing an object
    const {
      filteredItems, setButtonCategories,
      setButtonStoreRemove, setButtonSortOptions, setButtonClear, addToCart
    } = props

    return (

      <header id="store">

        <HeaderTitle />

        <HeaderItems 
          filteredItems = {filteredItems} 
          setButtonStoreRemove = {setButtonStoreRemove}
          addToCart = {addToCart}
        />

        <div className="store--sort">

          <ButtonsWrapper 
            setButtonCategories = {setButtonCategories}
            filteredItems = {filteredItems}
            
            setButtonSortOptions = {setButtonSortOptions}
            setButtonClear = {setButtonClear}
          />
          
        </div>
            
      </header>

    )

}

export default HeaderMenu