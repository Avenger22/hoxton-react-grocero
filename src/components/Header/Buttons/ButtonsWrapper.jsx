import '../HeaderMenu.css'
import ButtonsSort from './ButtonsSort'
import ButtonsFilter from './ButtonsFilter'
import ButtonsClear from './ButtonsClear'

function ButtonsWrapper(props) {

    const {setButtonCategories, filteredItems, 
      setButtonSortOptions, setButtonClear} = props

    return (

        <div className="button-wrapper">

            <ButtonsSort 
              setButtonSortOptions = {setButtonSortOptions}
            />

            <ButtonsFilter 
              setButtonCategories = {setButtonCategories}
              filteredItems = {filteredItems}
            />

            <ButtonsClear 
              setButtonClear = {setButtonClear}
              
              setButtonCategories = {setButtonCategories}
              setButtonSortOptions = {setButtonSortOptions}
            />

          </div>

    )

}

export default ButtonsWrapper