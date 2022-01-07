import HeaderItems from '../Header/HeaderItems'
import ButtonsWrapper from '../Header/ButtonsWrapper'

import "../Header/HeaderMenu.css"
// import "../../app.css"
// import '../../style.css'

function HeaderMenu(props) {

    const {filteredItems} = props

    return (

      <header id="store">

        <h1>Grocero</h1>

        <HeaderItems 
          filteredItems = {filteredItems} 
        />

        <div className="store--sort">

          <ButtonsWrapper />
          
        </div>
            
      </header>

    )

}

export default HeaderMenu