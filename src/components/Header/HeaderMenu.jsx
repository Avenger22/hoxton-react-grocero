import HeaderItems from '../Header/Items/HeaderItems'
import ButtonsWrapper from '../Header/Buttons/ButtonsWrapper'

import "../Header/HeaderMenu.css"

function HeaderMenu(props) {

    //decounstructing an object
    const {
      filteredItems, buttonCategories, setButtonCategories,
      buttonStoreRemove, setButtonStoreRemove, buttonStoreClicked, 
      setButtonStoreClicked, buttonStoreAdd, setButtonStoreAdd
    } = props

    return (

      <header id="store">

        <h1>Grocero</h1>

        <HeaderItems 
          filteredItems = {filteredItems} 

          buttonStoreRemove = {buttonStoreRemove}
          setButtonStoreRemove = {setButtonStoreRemove}

          buttonStoreAdd = {buttonStoreAdd}
          setButtonStoreAdd = {setButtonStoreAdd}

          buttonStoreClicked = {buttonStoreClicked}
          setButtonStoreClicked = {setButtonStoreClicked}
        />

        <div className="store--sort">

          <ButtonsWrapper 
            buttonCategories = {buttonCategories}
            setButtonCategories = {setButtonCategories}
            
            filteredItems = {filteredItems}
          />
          
        </div>
            
      </header>

    )

}

export default HeaderMenu