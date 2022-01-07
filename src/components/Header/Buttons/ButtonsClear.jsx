import ButtonClear from "./ButtonClear"

function ButtonsClear(props){

    const {setButtonClear} = props 
    
    let typeSortArray = ['clearSort', 'clearFilter']

    return (

        <div className="button-clear-wrapper">

            {typeSortArray.map(typeSort => 

                <ButtonClear 
                    key = {typeSort}
                    setButtonClear = {setButtonClear}

                    typeSort = {typeSort}
                />

            )}

        </div>

    )

}

export default ButtonsClear