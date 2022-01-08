import HeaderItems from '../Header/Items/HeaderItems'
import ButtonsWrapper from '../Header/Buttons/ButtonsWrapper'

import "../Header/HeaderMenu.css"

function HeaderMenu(props) {

    //decounstructing an object
    const {
      filteredItems,setButtonCategories,
      setButtonStoreRemove, setButtonStoreClicked, setButtonStoreAdd, 
      setButtonSortOptions, setButtonClear, buttonStoreRemove
    } = props

    return (

      <header id="store">

        <h1>Grocero</h1>

        <HeaderItems 
          filteredItems = {filteredItems} 
          setButtonStoreRemove = {setButtonStoreRemove}

          buttonStoreRemove = {buttonStoreRemove}
          setButtonStoreAdd = {setButtonStoreAdd}
          
          setButtonStoreClicked = {setButtonStoreClicked}
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