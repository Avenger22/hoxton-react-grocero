import ButtonSort from '../Buttons/ButtonSort'

function ButtonsSort(props) {

    const {buttonCategories, setButtonCategories} = props
    let typeSortArray = ['alphabet', 'remove', 'price']

    return (

        <div className="button-sort-wrapper">

            {typeSortArray.map(typeSort => 

                <ButtonSort 
                    key = {typeSort}
                    buttonCategories = {buttonCategories}
                    setButtonCategories = {setButtonCategories}
                    typeSort = {typeSort}
                />

            )}

        </div>

    )

}

export default ButtonsSort