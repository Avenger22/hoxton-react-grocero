import ButtonFilter from './ButtonFilter'

function ButtonsFilter(props) {

    const {buttonCategories, setButtonCategories, filteredItems} = props
    
    return (

        <div className="buttons-filter-wrapper">

            {filteredItems.map(item => 

                <ButtonFilter 
                    key = {`buttonFilter-${item.id}`}
                    item = {item}

                    buttonCategories = {buttonCategories}
                    setButtonCategories = {setButtonCategories}
                />

            )}

        </div>
        
    )

}

export default ButtonsFilter