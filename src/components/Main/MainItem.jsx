import "../Main/MainItem.css"
import '../../style.css'
import '../../app.css'

function MainItem(props) {

    const {removeFromCart, addToCart, item} = props
    
    return (

        <li>

            <img
                className="cart--item-icon"
                src={`../../assets/icons/${item.image}`} 
                alt={item.name}
            />

            <p>{item.name}</p>

            <button className="quantity-btn remove-btn center"
            onClick={() => removeFromCart(item)}>
                -
            </button>

            <span className="quantity-text center">{item.quantity}</span>

            <button className="quantity-btn add-btn center"
            onClick={() => addToCart(item)}>
                +
            </button>

        </li>

    )

}

export default MainItem