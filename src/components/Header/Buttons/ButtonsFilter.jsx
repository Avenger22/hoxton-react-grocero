import ButtonFilter from './ButtonFilter'

function ButtonsFilter(props) {

    const {setButtonCategories, filteredItems} = props
    
    return (

        <div className="buttons-filter-wrapper">

            {filteredItems.map(item => 

                <ButtonFilter 
                    key = {`buttonFilter-${item.id}`}
                    item = {item}

                    setButtonCategories = {setButtonCategories}
                />

            )}

        </div>
        
    )

}

export default ButtonsFilter