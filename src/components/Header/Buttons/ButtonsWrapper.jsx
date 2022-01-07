import '../HeaderMenu.css'
import ButtonsSort from './ButtonsSort'
import ButtonsFilter from './ButtonsFilter'

function ButtonsWrapper(props) {

    const {buttonCategories, setButtonCategories, filteredItems} = props

    return (

        <div className="button-wrapper">

            <ButtonsSort 
              buttonCategories = {buttonCategories}
              setButtonCategories = {setButtonCategories}
            />

            <ButtonsFilter 
              buttonCategories = {buttonCategories}
              setButtonCategories = {setButtonCategories}
              filteredItems = {filteredItems}
            />

          </div>

    )

}

export default ButtonsWrapper