import MainItem from "../Main/MainItem"

import "../Main/MainItem.css"
import '../../style.css'
import "../../app.css"

function MainItems(props) {

    const {filteredItems, setCartItems, setButtonCartCalculation} = props

    return (

      <div className="cart--item-list-container">

        <ul className="item-list cart--item-list">

          <MainItem 
            filteredItems = {filteredItems}
            setCartItems = {setCartItems}
            setButtonCartCalculation = {setButtonCartCalculation}
          />

        </ul>

      </div>

    )

}

export default MainItems