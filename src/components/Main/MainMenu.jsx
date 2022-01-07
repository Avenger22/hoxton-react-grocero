import MainItems from '../Main/MainItems'
import TotalSection from '../Main/TotalSection'
import EmptyButton from '../Main/EmptyButton'

function MainMenu() {

    return (

        <main id="cart">

            <h2>Your Cart</h2>

            <MainItems />
            
            <TotalSection />

            <EmptyButton />

        </main>
          
    )

}

export default MainMenu