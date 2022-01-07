function ButtonSort(props) {

    const {typeSort} = props 
    let className = `store--btn-sort-${typeSort}`

    return (

        <button className={className}>
            Sort by {typeSort}:
        </button>

    )

}

export default ButtonSort