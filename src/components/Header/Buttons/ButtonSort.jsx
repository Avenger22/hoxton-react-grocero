function ButtonSort(props) {

    const {typeSort, setButtonSortOptions} = props 

    let className = `store--btn-sort-${typeSort}`

    return (

        <button 
            className={className}

            onClick={function () {
                setButtonSortOptions(typeSort)
            }}

        >

            Sort by {typeSort}:

        </button>

    )

}

export default ButtonSort