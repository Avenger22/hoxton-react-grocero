import "../Main/MainItem.css"
import '../../style.css'
import '../../app.css'

function MainItem(props) {

    const {filteredItems, setCartItems, setButtonCartCalculation} = props
    
    return (

        <li>

            <img
                className="cart--item-icon"
                src="../../assets/icons/002-carrot.svg"
                alt="beetroot"
            />

            <p>beetroot</p>

            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">1</span>
            <button className="quantity-btn add-btn center">+</button>

        </li>

    )

}

export default MainItem