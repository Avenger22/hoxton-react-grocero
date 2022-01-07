import '../../style.css'
import '../../app.css'

import MainItems from '../Main/MainItems'
import TotalSection from '../Main/EmptyAndTotal/TotalSection'
import EmptyButton from '../Main/EmptyAndTotal/EmptyButton'

function MainMenu(props) {

    const {filteredItems, setClearClicked, setButtonCartCalculation, setCartItems} = props

    return (

        <main id="cart">

            <h2>Your Cart</h2>

            <MainItems 
                filteredItems = {filteredItems}
                setCartItems = {setCartItems}
                setButtonCartCalculation = {setButtonCartCalculation}
            />
            
            <TotalSection />

            <EmptyButton 
                setClearClicked = {setClearClicked}
            />

        </main>
          
    )

}

export default MainMenu