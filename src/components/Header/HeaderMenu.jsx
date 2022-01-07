import HeaderItems from '../Header/HeaderItems'
import ButtonsWrapper from '../Header/ButtonsWrapper'

import "../Header/HeaderMenu.css"
import "../../app.css"

function HeaderMenu() {

    return (

      <header id="store">

        <h1>Grocero</h1>

        <HeaderItems />

        <div className="store--sort">

          <ButtonsWrapper />
          
        </div>
            
      </header>

    )

}

export default HeaderMenu