function ButtonFilter(props) {

    const {item} = props
    let className = `store--btn-sort-filter-${item.id} button-store--btn-sort-filter`

    return (

        <button className={className}>
            Filter by type: {item.name}
        </button>

    )

}

export default ButtonFilter