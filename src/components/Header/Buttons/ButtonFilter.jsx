function ButtonFilter(props) {

    const {item, setButtonCategories} = props
    let className = `store--btn-sort-filter-${item.id} button-store--btn-sort-filter`

    return (

        <button 
            className={className}
            onClick={function () {
                setButtonCategories(item.name)
            }}
        >
            Filter by type: {item.name}
        </button>

    )

}

export default ButtonFilter