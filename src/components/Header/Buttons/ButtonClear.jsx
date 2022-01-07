function ButtonClear(props) {

    const {typeSort, setButtonClear, setButtonCategories, setButtonSortOptions} = props 

    let className = `store--btn-sort-${typeSort}`

    return (

        <button 
            className={className}

            onClick={function () {

                if (typeSort === 'clearSort') {
                    const empty = ''
                    setButtonSortOptions(empty)
                }

                else if (typeSort === 'clearFilter') {
                    const empty = '' 
                    setButtonCategories(empty)
                }

            }}

        >

            Clear by {typeSort}:

        </button>

    )

}

export default ButtonClear