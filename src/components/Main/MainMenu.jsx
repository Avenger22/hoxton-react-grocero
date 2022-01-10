import '../../style.css'
import '../../app.css'

import MainItems from '../Main/MainItems'
import TotalSection from '../Main/EmptyAndTotal/TotalSection'
import EmptyButton from '../Main/EmptyAndTotal/EmptyButton'
import MainTitle from '../Main/MainTitle'

function MainMenu(props) {

    const {setClearClicked, removeFromCart, addToCart, calculateTotal, cartItems, setCartItems} = props

    return (

        <main id="cart">

            <MainTitle />

            <MainItems
                removeFromCart= {removeFromCart}
                addToCart= {addToCart}
                cartItems = {cartItems}
            />
            
            <TotalSection 
                calculateTotal={calculateTotal}
            />

            <EmptyButton 
                setClearClicked = {setClearClicked}
                setCartItems = {setCartItems}
            />

        </main>
          
    )

}

export default MainMenu