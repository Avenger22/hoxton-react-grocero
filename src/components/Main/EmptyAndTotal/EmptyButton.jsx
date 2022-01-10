import '../../../style.css'
import '../../../app.css'

function EmptyButton(props) {

    return (

        <div className="btn-section">

            <button className="empty-cart-btn" onClick={function () {
                let voidArray = []
                props.setCartItems(voidArray)
            }}>
                Empty the cart
            </button>
              
        </div>

    )

}

export default EmptyButton