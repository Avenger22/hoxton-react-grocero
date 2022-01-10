import MainItem from "../Main/MainItem"

import "../Main/MainItem.css"
import '../../style.css'
import "../../app.css"

function MainItems(props) {

    const {removeFromCart, addToCart, cartItems} = props

    return (

      <div className="cart--item-list-container">

        <ul className="item-list cart--item-list">

          {cartItems.map(item => 

              <MainItem 
                removeFromCart={removeFromCart}
                addToCart={addToCart}

                key = {`item-${item.id}`} //important for having each li an ID as KEY PROP
                item = {item}
              />

            )}

        </ul>

      </div>

    )

}

export default MainItems