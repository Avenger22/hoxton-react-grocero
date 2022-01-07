import MainItem from "./MainItem"
import "../Main/MainItem.css"
import '../../style.css'
import "../../app.css"

function MainItems(props) {

    const {filteredItems} = props

    return (

      <div className="cart--item-list-container">

        <ul className="item-list cart--item-list">

          <MainItem 
            filteredItems = {filteredItems}
          />

        </ul>

      </div>

    )

}

export default MainItems