import ButtonSort from '../Buttons/ButtonSort'

function ButtonsSort(props) {

    const {setButtonSortOptions} = props
    
    let typeSortArray = ['alphabet', 'price']

    return (

        <div className="button-sort-wrapper">

            {typeSortArray.map(typeSort => 

                <ButtonSort 
                    key = {typeSort}
                    setButtonSortOptions = {setButtonSortOptions}

                    typeSort = {typeSort}
                />

            )}

        </div>

    )

}

export default ButtonsSort