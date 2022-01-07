import MainItem from "./MainItem"
import "../Main/MainItem.css"
import "../../app.css"

function MainItems() {

    return (

      <div className="cart--item-list-container">

        <ul className="item-list cart--item-list">

          <MainItem />

        </ul>

      </div>

    )

}

export default MainItems