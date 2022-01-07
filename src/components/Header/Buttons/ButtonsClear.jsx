import ButtonClear from "./ButtonClear"

function ButtonsClear(props){

    const {setButtonClear, setButtonCategories, setButtonSortOptions} = props 
    
    let typeSortArray = ['clearSort', 'clearFilter']

    return (

        <div className="button-clear-wrapper">

            {typeSortArray.map(typeSort => 

                <ButtonClear 
                    key = {typeSort}
                    setButtonClear = {setButtonClear}

                    setButtonCategories = {setButtonCategories}
                    setButtonSortOptions = {setButtonSortOptions}

                    typeSort = {typeSort}
                />

            )}

        </div>

    )

}

export default ButtonsClear