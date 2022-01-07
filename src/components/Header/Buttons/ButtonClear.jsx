function ButtonClear(props) {

    const {typeSort, setButtonClear} = props 

    let className = `store--btn-sort-${typeSort}`

    return (

        <button 
            className={className}

            onClick={function () {
                setButtonClear(typeSort)
            }}

        >

            Clear by {typeSort}:

        </button>

    )

}

export default ButtonClear