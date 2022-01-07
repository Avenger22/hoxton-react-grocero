import '../../style.css'
import '../../app.css'

import MainItems from '../Main/MainItems'
import TotalSection from '../Main/TotalSection'
import EmptyButton from '../Main/EmptyButton'

function MainMenu(props) {

    const {filteredItems} = props

    return (

        <main id="cart">

            <h2>Your Cart</h2>

            <MainItems 
                filteredItems = {filteredItems}
            />
            
            <TotalSection />

            <EmptyButton />

        </main>
          
    )

}

export default MainMenu